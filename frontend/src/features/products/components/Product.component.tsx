import { FC } from 'react';

import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';

import { ProductDocument } from '../models/Product';
import { decrementProduct, incrementProduct } from '../productSlice';

interface ProductComponentProps {
	product: ProductDocument;
}

const ProductComponent: FC<ProductComponentProps> = ({ product }) => {
	const dispatch = useAppDispatch();

	const { cart } = useAppSelector((state) => state.product);

	let qty = 0;

	const cartItem = cart.find((item) => item._id === product._id);

	if (cartItem) {
		qty = cartItem.quantity;
	}

	return (
		<Card sx={{ width: 200, minWidth: 200, height: "100%" }}>
			<CardMedia
				component='img'
				height='140'
				image='https://via.placeholder.com/300.png/09f/fff'
				alt='image'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					$ {product.price}
				</Typography>
				{product.description && (
					<Typography
						variant='body2'
						color='textSecondary'
						style={{
							height: '3em',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: 2,
							WebkitBoxOrient: 'vertical',
						}}
					>
						{product.description}
					</Typography>
				)}
			</CardContent>
			<CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Button
					onClick={() => {
						dispatch(decrementProduct(product));
					}}
					disabled={qty === 0}
					size='large'
					sx={{color: "blue"}}
				>
					-
				</Button>
				<span>{qty}</span>
				<Button
					onClick={() => {
						dispatch(incrementProduct(product));
					}}
					size='large'
					sx={{color: "blue"}}
				>
					+
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProductComponent;

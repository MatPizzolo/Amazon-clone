import { useEffect } from 'react';
import HeaderComponent from '../features/products/components/Header.component';
import ProductComponent from '../features/products/components/Product.component';
import { getProducts } from '../features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux/hooks';
import Footer from '../commons/Footer/Footer';
import { Box } from '@mui/material';

const HomePage = () => {
	const dispatch = useAppDispatch();

	const { cart, products } = useAppSelector((state) => state.product);

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	return (
		<div>
			<HeaderComponent />
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '48px',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '48px',
					marginBottom: '48px',
				}}
			>
				{products.length > 0 &&
					products.map((product) => (
						<ProductComponent key={product._id} product={product} />
					))}
			</div>
			<Box mt={16} />
			<Footer />
		</div>
	);
};

export default HomePage;

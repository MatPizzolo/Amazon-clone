import { Typography, Box } from '@mui/material';
import HeaderComponent from '../features/products/components/Header.component';
// import PaymentGateway from '../features/products/components/Payment.component';
import ProductComponent from '../features/products/components/Product.component';

import { useAppSelector } from '../hooks/redux/hooks';
import Footer from '../commons/Footer/Footer';

const CartPage = () => {
	const { cart, products } = useAppSelector((state) => state.product);
	console.log(cart);
	const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);

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
				}}
			>
				{products.length > 0 &&
					products.map((product) => (
						<ProductComponent key={product._id} product={product} />
					))}
			</div>

			<div style={{ width: '80%', margin: 'auto' }}>
				<hr style={{ marginTop: '16px' }} />
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						fontSize: '20px',
					}}
				>
					<Box display="flex" flexDirection="column" >
						<Box display="flex" flexDirection="column" justifyContent="flex-end" >
							{cart.length > 0 &&
								cart.map((product) => {
									return (
										<Box textAlign="right">
											{product.quantity > 1 ?
												<Typography>{product.name} - {product.price} X{product.quantity}</Typography>
												:
												<Typography>{product.name} - {product.price}</Typography>
											}
										</Box>
									)
								})}
						</Box>
						<Box>
							<span style={{ marginRight: '16px' }}>
								Subtotal ({totalQty}) items:
							</span>
							<span style={{ fontWeight: 500, marginBottom: '48px' }}>
								${totalPrice.toFixed(2)}
							</span>
						</Box>
					</Box>
				</div>

				{/* {totalQty > 0 && <PaymentGateway />} */}
			</div>
			<Box mt={8} />
			<Footer />
		</div>
	);
};

export default CartPage;

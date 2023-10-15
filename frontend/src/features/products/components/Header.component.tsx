import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppBar, Badge, Box, Button, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import { logout, selectedUser } from '../../auth/authSlice';

const HeaderComponent = () => {
	const { user } = useAppSelector(selectedUser);
	const { cart } = useAppSelector((state) => state.product);

	const [cartCount, setCartCount] = useState(0);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
		setCartCount(() => totalQty);
	}, [cart]);

	const logoutHandler = () => {
		dispatch(logout());
	};

	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuOpen = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				sx={{ backgroundColor: '#131921', color: 'white', padding: '4px' }}
			>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
					{/* First div at the beginning */}
					<div style={{ display: 'flex' }}>
						<div>
							<Box display="flex" alignItems="center">
								<div>Hello, {user?.name}</div>
								<IconButton
									aria-controls="user-menu"
									aria-haspopup="true"
									onClick={handleMenuOpen}
									color="inherit"
									size="small"
								>
									&#9660; {/* Unicode for a down arrow */}
								</IconButton>
							</Box>
							<Menu
								id="user-menu"
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={handleMenuClose}
							>
								<MenuItem onClick={logoutHandler}>Sign Out</MenuItem>
							</Menu>
						</div>
					</div>
					{/* Image in the middle */}
					<img
						onClick={() => navigate('/')}
						style={{
							width: '113px',
							height: '50px',
							paddingTop: '10px',
							cursor: 'pointer',
						}}
						src='/amazon-logo.png'
						alt='amazon logo'
					/>
					{/* Button at the end */}
					<Button onClick={() => navigate('/cart')}>
						<Badge badgeContent={cartCount} color='primary'>
							<ShoppingCartOutlinedIcon fontSize='large' />
						</Badge>
						{/* <span>Cart</span> */}
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);

};

export default HeaderComponent;

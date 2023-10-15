import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
	const navigate = useNavigate();

	return (
		<Box sx={{ backgroundColor: '#131921', color: 'white', padding: '20px', width: "100%" }}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={4} display={"flex"} flexDirection={"column"}>
					<Typography variant="h6">Get to Know Us</Typography>
					<Link color="inherit" href="#">
						Careers
					</Link>
					<Link color="inherit" href="#">
						Blog
					</Link>
					<Link color="inherit" href="#">
						About Amazon
					</Link>
					<Link color="inherit" href="#">
						Investor Relations
					</Link>
					{/* Add more links as needed */}
				</Grid>
				<Grid item xs={12} sm={6} md={4} display={"flex"} flexDirection={"column"}>
					<Typography variant="h6">Make Money with Us</Typography>
					<Link color="inherit" href="#">
						Sell on Amazon
					</Link>
					<Link color="inherit" href="#">
						Sell under Amazon Accelerator
					</Link>
					<Link color="inherit" href="#">
						Become an Affiliate
					</Link>
					{/* Add more links as needed */}
				</Grid>
				<Grid item xs={12} md={4} display={"flex"} flexDirection={"column"}>
					<Typography variant="h6">Amazon Payment Products</Typography>
					<Link color="inherit" href="#">
						Amazon Business Card
					</Link>
					<Link color="inherit" href="#">
						Shop with Points
					</Link>
					<Link color="inherit" href="#">
						Reload Your Balance
					</Link>
					{/* Add more links as needed */}
				</Grid>
			</Grid>
			<Box textAlign="center">
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
				<Typography variant="body2" style={{ marginTop: '20px' }}>
					© {new Date().getFullYear()} Amazon.com, Inc. or its affiliates
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;

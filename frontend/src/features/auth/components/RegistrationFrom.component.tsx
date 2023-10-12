import { Box, Grid, TextField, InputLabel, Typography, Button, Divider } from '@mui/material'
import { FC, FormEvent } from 'react'
import { Link } from 'react-router-dom';

const RegistrationFromComponent: FC = () => {

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("clicked");
	}

	return (
		<Box sx={{ border: 1, padding: 2, borderColor: '#cccccc', width: '350px' }}>
			<form onSubmit={onSubmitHandler}>
				<Grid container direction="column" justifyContent="flex-start">
					<Typography variant="h4" component="h1">Create Account</Typography>

					<InputLabel sx={{ fontWeight: 500, marginTop: 1, color: "black" }} htmlFor="name"> Your name</InputLabel>
					<TextField type="text" name="name" id="name" variant="outlined" size="small" />

					<InputLabel sx={{ fontWeight: 500, marginTop: 1, color: "black" }} htmlFor="email"> Your email</InputLabel>
					<TextField type="text" name="email" id="email" variant="outlined" size="small" />

					<InputLabel sx={{ fontWeight: 500, marginTop: 1, color: "black" }} htmlFor="password"> Your password</InputLabel>
					<TextField type="text" name="password" id="password" variant="outlined" size="small" placeholder='Minimum 6 characters required ' />

					<InputLabel sx={{ fontWeight: 500, marginTop: 1, color: "black" }} htmlFor="confirmPassword"> Re-Enter password</InputLabel>
					<TextField type="text" name="name" id="confirmPassword" variant="outlined" size="small" />

					<Button variant="contained" type="submit" style={{ marginTop: "16px", height: "31px", backgroundColor: "#f0c14b", color: "black", borderColor: "#a88734 #9c7e31 #846a29", textTransform: "none" }}>Register</Button>
				</Grid>
			</form>
			
			<div style={{ marginTop: "30px" }}>
				<small>
					<span>By creating an account, you agree to Amazon´s</span>
				</small>
			</div>
			<div>
				<small>
					<a href="#" style={{ textDecoration: "none" }}>{' '}Conditions of use</a>{' '}and{' '}<a href="#" style={{ textDecoration: "none" }}>Privacy Policy</a>
				</small>
			</div>

			<Divider sx={{ marginTop: "36px", marginBottom: "36px" }} />
			<div>
				<small>
					Already have an account?{' '}
					<Link to="/signin" style={{textDecoration: "none", color: "#0000ee"}}>Sign-in</Link>
				</small>
			</div>

			<div>
				<small>
					Buying for work?
					<a href="#" style={{ textDecoration: "none" }}>{' '}Create a free business account</a>
				</small>
			</div>
		</Box>
	)
}

export default RegistrationFromComponent
import React from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './shared/utils/theme';

import HomePage from './pages/Home.page';
import RegisterPage from './pages/Register.page';
import SigninPage from './pages/Signin.page';
import PrivateRoute from './features/auth/components/PrivateRoute';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="*" element={<Navigate to="/" />} />
					<Route path='/' element={<PrivateRoute page={<HomePage /> } />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/signin' element={<SigninPage />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;

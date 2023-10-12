import React from 'react'
import AuthLayout from '../features/auth/components/AuthLayout'
import { Button, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../hooks/redux/hooks'
import { logout } from '../features/auth/authSlice'

const HomePage = () => {
  const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  }
  return (
    <AuthLayout>
      <Typography variant="h2">Home Page</Typography>
      <Button onClick={logoutHandler} variant="outlined">Logout</Button>
      <Typography variant="h4">{user?.email}</Typography>
    </AuthLayout>
  )
}

export default HomePage
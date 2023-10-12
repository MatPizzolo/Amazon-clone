import React from 'react'
import AuthLayout from '../features/auth/components/AuthLayout'
import RegistrationFromComponent from '../features/auth/components/RegistrationFrom.component'

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegistrationFromComponent />
    </AuthLayout>
  )
}

export default RegisterPage
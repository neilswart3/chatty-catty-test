import React from 'react'
import { Auth } from 'src/components'
import { AuthLayout } from 'src/layouts'

const Login: React.FC = () => {
  return (
    <AuthLayout back='/auth' title='Login'>
      <Auth section='login' />
    </AuthLayout>
  )
}

export default Login

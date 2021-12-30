import React from 'react'
import { Auth } from 'src/components'
import { AuthLayout } from 'src/layouts'

const Register: React.FC = () => {
  return (
    <AuthLayout back='/auth' title='Register'>
      <Auth section='register' />
    </AuthLayout>
  )
}
export default Register

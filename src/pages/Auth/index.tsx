import React from 'react'
import { Auth as AuthComponent } from 'src/components'
import { AuthLayout } from 'src/layouts'

const Auth: React.FC = () => {
  return (
    <AuthLayout>
      <AuthComponent />
    </AuthLayout>
  )
}
export default Auth

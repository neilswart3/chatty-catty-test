import React from 'react'
import { Auth as AuthComponent, LogoHeader } from 'src/components'
import Styled from './styles'

const Auth: React.FC = () => {
  return (
    <Styled.Auth image='art-background.jpg' header={<LogoHeader />}>
      <AuthComponent />
    </Styled.Auth>
  )
}
export default Auth

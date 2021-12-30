import React from 'react'
import { Login, Register, Welcome } from './fragments'
import Styled from './styles'

interface Props {
  section?: 'auth' | 'register' | 'login'
}

const Auth: React.FC<Props> = ({ section = 'auth' }) => {
  let component

  switch (section) {
    case 'login':
      component = <Login />
      break
    case 'register':
      component = <Register />
      break
    default:
      component = <Welcome />
      break
  }

  return <Styled.Auth>{component}</Styled.Auth>
}

export default Auth

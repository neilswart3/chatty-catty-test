import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Styled from './styles'

const Auth: React.FC = () => {
  return (
    <Styled.Auth>
      <Styled.AuthWelcome>
        <Button component={Link} to='/login' fullWidth variant='outlined'>
          Log in
        </Button>
        <Button component={Link} to='/register' fullWidth variant='contained'>
          Register
        </Button>
      </Styled.AuthWelcome>
    </Styled.Auth>
  )
}
export default Auth

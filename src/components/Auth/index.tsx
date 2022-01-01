import React from 'react'
import { useAppDispatch } from 'src/lib/hooks/redux'
import { auth } from 'src/store/slices/auth'
import { AuthRequest } from 'src/store/slices/auth/types'
import { AuthForm, Welcome } from './fragments'
import { Values } from './fragments/AuthForm'
import Styled from './styles'

interface Props {
  section?: 'auth' | 'register' | 'login'
}

const Auth: React.FC<Props> = ({ section = 'auth' }) => {
  const dispatch = useAppDispatch()

  const handleSubmit = (values: Values): void => {
    if (section !== 'auth') {
      dispatch(
        auth.request({ ...values, authType: section } as unknown as AuthRequest)
      )
    }
  }

  return (
    <Styled.Auth>
      {section === 'auth' ? <Welcome /> : <AuthForm onSubmit={handleSubmit} />}
    </Styled.Auth>
  )
}

export default Auth

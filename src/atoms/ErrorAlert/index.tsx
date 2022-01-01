import { AlertTitle } from '@mui/material'
import React from 'react'
import Styled from './styles'

interface Props {
  title?: string
  message: string
}

const ErrorAlert: React.FC<Props> = ({ title = 'Error', message }) => {
  return (
    <Styled.ErrorAlert variant='filled' severity='error'>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Styled.ErrorAlert>
  )
}
export default ErrorAlert

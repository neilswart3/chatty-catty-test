import { Typography } from '@mui/material'
import React from 'react'
import Styled from './styles'

const LogoHeader: React.FC = () => {
  return (
    <Styled.LogoHeader>
      <Typography variant='h4' component='h1'>
        Welcome to Chatty Catty
      </Typography>
    </Styled.LogoHeader>
  )
}
export default LogoHeader

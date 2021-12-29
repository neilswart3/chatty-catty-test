import { Typography } from '@mui/material'
import React from 'react'
import { Image } from 'src/atoms'
import Styled from './styles'

const LogoHeader: React.FC = () => {
  return (
    <Styled.LogoHeader>
      <Styled.Logo elevation={0}>
        <Image src='/tears.png' alt='cat logo' />
      </Styled.Logo>
      <Typography variant='h4' component='h1'>
        Welcome to Chatty Catty
      </Typography>
    </Styled.LogoHeader>
  )
}
export default LogoHeader

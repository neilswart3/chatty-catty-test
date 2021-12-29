import React from 'react'
import { BackButton, Logo } from '..'
import Styled from './styles'

interface Props {
  title: string
  back?: string | null
}

const HeaderBar: React.FC<Props> = ({ title, back = null }) => {
  return (
    <Styled.HeaderBar position='static' color='transparent' elevation={0}>
      <Styled.HeaderBarInner>
        {back ? <BackButton path={back} /> : <Logo />}
        <Styled.HeaderTitle variant='h5' component='h2'>
          {title}
        </Styled.HeaderTitle>
      </Styled.HeaderBarInner>
    </Styled.HeaderBar>
  )
}

export default HeaderBar

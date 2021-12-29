import React from 'react'
import { HeaderBar } from 'src/atoms'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  title: string
  back?: string | null
}

const Header: React.FC<Props> = ({ children, title, back = null }) => {
  return (
    <Styled.Header>
      <HeaderBar back={back} title={title} />
      {children}
    </Styled.Header>
  )
}
export default Header

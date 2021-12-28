import React from 'react'
import Styled from './styles'

interface Props {
  children: React.ReactNode
}

const Header: React.FC<Props> = ({ children }) => {
  return <Styled.Header>{children}</Styled.Header>
}
export default Header

import React from 'react'
import Styled from './styles'

interface Props {
  children: React.ReactNode
}

const Footer: React.FC<Props> = ({ children }) => {
  return <Styled.Footer>{children}</Styled.Footer>
}
export default Footer

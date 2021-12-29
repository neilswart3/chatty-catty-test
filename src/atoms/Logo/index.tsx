import React from 'react'
import CatLogo from './CatLogo'
import Styled from './styles'

const Logo: React.FC = () => {
  return (
    <Styled.Logo size='large'>
      <CatLogo />
    </Styled.Logo>
  )
}
export default Logo

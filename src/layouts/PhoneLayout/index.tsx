import React from 'react'
import Styled from './styles'

interface Props {
  children: React.ReactNode
}

const PhoneLayout: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <Styled.PhoneLayout>
      <Styled.PhoneHeader>
        <Styled.Speaker />
        <Styled.Camera />
      </Styled.PhoneHeader>
      <Styled.ContentWrap elevation={0}>
        <Styled.Content>{children}</Styled.Content>
      </Styled.ContentWrap>
    </Styled.PhoneLayout>
  )
}
export default PhoneLayout

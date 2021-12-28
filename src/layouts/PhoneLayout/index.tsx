import React from 'react'
import { Footer, Header } from 'src/components'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
  className?: string
}

const PhoneLayout: React.FC<Props> = (props) => {
  const { children, className = 'PhoneLayout', header, footer } = props

  return (
    <Styled.PhoneLayout className={className}>
      <Styled.PhoneHeader>
        <Styled.Speaker />
        <Styled.Camera />
      </Styled.PhoneHeader>
      <Styled.ContentWrap elevation={0}>
        {header && <Header>{header}</Header>}
        <Styled.Content>{children}</Styled.Content>
        {footer && <Footer>{footer}</Footer>}
      </Styled.ContentWrap>
    </Styled.PhoneLayout>
  )
}
export default PhoneLayout

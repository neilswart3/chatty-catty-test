import React from 'react'
import { Footer, Header } from 'src/components'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  back: string | null
  header: React.ReactNode
  footer: React.ReactNode
  className?: string
  image: string
}

const PhoneLayout: React.FC<Props> = (props) => {
  const { children, className = 'PhoneLayout', header, footer, image } = props

  return (
    <Styled.PhoneLayout className={className}>
      <Styled.PhoneHeader>
        <Styled.Speaker />
        <Styled.Camera />
      </Styled.PhoneHeader>
      <Styled.ContentWrap image={image} elevation={0}>
        {header && <Header>{header}</Header>}
        <Styled.Content>{children}</Styled.Content>
        {footer && <Footer>{footer}</Footer>}
      </Styled.ContentWrap>
    </Styled.PhoneLayout>
  )
}
export default PhoneLayout

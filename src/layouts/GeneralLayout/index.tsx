import React from 'react'
import { PhoneLayout } from '..'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  className?: string
  image?: string
}

const GeneralLayout: React.FC<Props> = (props) => {
  const {
    children,
    className = 'GeneralLayout',
    header = null,
    footer = null,
    image = '',
  } = props

  return (
    <Styled.GeneralLayout className={className}>
      {image && <Styled.Background image={image} />}
      <Styled.ContentWrap>
        <PhoneLayout image={image} header={header} footer={footer}>
          {children}
        </PhoneLayout>
      </Styled.ContentWrap>
    </Styled.GeneralLayout>
  )
}
export default GeneralLayout

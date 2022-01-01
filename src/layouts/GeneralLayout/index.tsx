import React from 'react'
import { PhoneLayout } from '..'
import Styled from './styles'

export interface Props {
  children: React.ReactNode
  back?: string | null
  header?: React.ReactNode
  footer?: React.ReactNode
  className?: string
  image?: string
  title?: string
}

const GeneralLayout: React.FC<Props> = (props) => {
  const {
    children,
    title = '',
    back = null,
    className = 'GeneralLayout',
    header = null,
    footer = null,
    image = '',
  } = props

  return (
    <Styled.GeneralLayout className={className}>
      {image && <Styled.Background image={image} />}
      <Styled.ContentWrap>
        <PhoneLayout
          title={title}
          back={back}
          image={image}
          header={header}
          footer={footer}
        >
          {children}
        </PhoneLayout>
      </Styled.ContentWrap>
    </Styled.GeneralLayout>
  )
}

export default GeneralLayout

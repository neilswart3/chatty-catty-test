import React from 'react'
import { PhoneLayout } from '..'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

const GeneralLayout: React.FC<Props> = (props) => {
  const {
    children,
    className = 'GeneralLayout',
    header = null,
    footer = null,
  } = props

  return (
    <Styled.GeneralLayout className={className}>
      <Styled.ContentWrap>
        <PhoneLayout header={header} footer={footer}>
          {children}
        </PhoneLayout>
      </Styled.ContentWrap>
    </Styled.GeneralLayout>
  )
}
export default GeneralLayout

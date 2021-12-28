import React from 'react'
import { Header, Footer } from 'src/components'
import { PhoneLayout } from '..'
import Styled from './styles'

interface Props {
  children: React.ReactNode
}

const GeneralLayout: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <Styled.GeneralLayout>
      <Styled.ContentWrap>
        <PhoneLayout>
          <Header />
          {children}
          <Footer />
        </PhoneLayout>
      </Styled.ContentWrap>
    </Styled.GeneralLayout>
  )
}
export default GeneralLayout

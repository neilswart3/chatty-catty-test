import React from 'react'
import { LogoHeader } from 'src/components'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  back?: string | null
  title?: string
}

const AuthLayout: React.FC<Props> = ({ children, back = null, title = '' }) => {
  return (
    <Styled.AuthLayout
      back={back}
      title={title}
      image='art-background.jpg'
      header={<LogoHeader />}
    >
      {children}
    </Styled.AuthLayout>
  )
}

export default AuthLayout

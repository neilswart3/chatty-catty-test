import React from 'react'
import { getInitials } from 'src/lib/utils'
import Styled from './styles'

interface Props {
  firstName: string
  lastName: string
  image: string
}

const Avatar: React.FC<Props> = (props) => {
  const { firstName, lastName, image } = props

  const initials = getInitials(firstName, lastName)

  return (
    <Styled.Avatar sx={{ width: 44, height: 44 }} src={image}>
      {image ? null : initials}
    </Styled.Avatar>
  )
}
export default Avatar

import React from 'react'
import Styled from './styles'

interface Props {
  src: string
  alt: string
}

const Image: React.FC<Props> = ({ src, alt }) => {
  return (
    <Styled.ImageWrap>
      <Styled.Image src={src} alt={alt} />
    </Styled.ImageWrap>
  )
}

export default Image

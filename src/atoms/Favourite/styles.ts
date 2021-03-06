import styled from '@emotion/styled/macro'
import { Card, CardActionArea } from '@mui/material'

interface FavouriteProps {
  image: string
}

const Favourite = styled(Card)<FavouriteProps>`
  position: relative;
  height: 9rem;
  width: 6rem;
  box-shadow: 14px 6px 20px rgba(0, 0, 0, 0.45);
  border-radius: 1.9rem;
  overflow: hidden;
  ${({ image }) =>
    image ? `background: url(${image}) no-repeat center/cover` : ''}
`

interface FavouriteInnerProps {
  component: any
  to: string
}

const FavouriteInner = styled(CardActionArea)<FavouriteInnerProps>`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1.25rem 0.6rem;
  background: linear-gradient(
      180deg,
      rgba(41, 47, 63, 0) 0%,
      rgba(41, 47, 63, 0.8) 100%
    ),
    url(.jpg);
`

const Styled = { Favourite, FavouriteInner }

export default Styled

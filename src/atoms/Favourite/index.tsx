import { Typography } from '@mui/material'
import Styled from './styles'

interface Props {
  firstName: string
  lastName: string
  image?: string
}

const Favourite: React.FC<Props> = (props) => {
  const { firstName, lastName, image = '' } = props

  return (
    <Styled.Favourite image={image}>
      <Styled.FavouriteInner>
        <Typography variant='caption' component='h2'>
          {firstName}
          <br />
          {lastName}
        </Typography>
      </Styled.FavouriteInner>
    </Styled.Favourite>
  )
}
export default Favourite

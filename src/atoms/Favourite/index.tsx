import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Styled from './styles'

interface Props {
  id: string
  firstName: string
  lastName: string
  image?: string
}

const Favourite: React.FC<Props> = (props) => {
  const { id, firstName, lastName, image = '' } = props

  return (
    <Styled.Favourite image={image}>
      <Styled.FavouriteInner to={`/chat/${id}`} component={Link}>
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

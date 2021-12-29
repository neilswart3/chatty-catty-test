import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { Avatar } from 'src/atoms'
import Styled from './styles'

interface Props {
  id: string
  firstName: string
  lastName: string
  image: string
  time: Date
  lastMessage: string
}

const ChatsItem: React.FC<Props> = (props) => {
  const { id, firstName, lastName, image, time, lastMessage } = props

  const avatarProps = { firstName, lastName, image }

  return (
    <Styled.ChatsItem elevation={0}>
      <Styled.CardActionArea to={`/chat/${id}`} component={Link}>
        <Styled.CardHeader
          avatar={<Avatar {...avatarProps} />}
          title={
            <Typography variant='body1' component='h2'>
              {firstName} {lastName}
            </Typography>
          }
          subheader={<Typography variant='caption'>{lastMessage}</Typography>}
          action={<div>{format(time, 'H:m')}</div>}
        />
      </Styled.CardActionArea>
    </Styled.ChatsItem>
  )
}
export default ChatsItem

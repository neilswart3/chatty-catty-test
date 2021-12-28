import { Typography } from '@mui/material'
import { format } from 'date-fns'
import Styled from './styles'

interface Props {
  text: string
  time: Date
  author?: boolean
}

const Bubble: React.FC<Props> = ({ text, author = false, time }) => {
  return (
    <Styled.BubbleContainer author={author}>
      <Styled.Bubble author={author} elevation={0}>
        <Styled.ContentWrap>
          <Typography variant='body1'>{text}</Typography>
        </Styled.ContentWrap>
        <Styled.TimeWrap>
          <Typography variant='caption'>{format(time, 'H:mm')}</Typography>
        </Styled.TimeWrap>
      </Styled.Bubble>
    </Styled.BubbleContainer>
  )
}

export default Bubble

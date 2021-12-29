import React from 'react'
import { Bubble } from 'src/atoms'
import Styled from './styles'
import data, { Chat } from './data'

interface Props {}

const ChatView: React.FC<Props> = (props) => {
  return (
    <Styled.ChatView>
      {data.conversation.map(
        ({ id, message: { date, author, content } }: Chat) => (
          <Bubble
            key={id}
            author={author === 'new author'}
            text={content}
            time={date}
          />
        )
      )}
    </Styled.ChatView>
  )
}
export default ChatView

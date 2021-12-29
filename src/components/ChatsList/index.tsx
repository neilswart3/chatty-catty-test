import React from 'react'
import Styled from './styles'
import data from './data'
import { ChatsItem } from '..'

interface Props {}

const ChatsList: React.FC<Props> = (props) => {
  return (
    <Styled.ChatsList>
      {[...data, ...data].map((item) => (
        <ChatsItem key={item.id} {...item} />
      ))}
    </Styled.ChatsList>
  )
}
export default ChatsList

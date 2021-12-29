import React from 'react'
import { ChatView } from 'src/components'
import Styled from './styles'

const Chat: React.FC = () => {
  return (
    <Styled.Chat
      back='/'
      title='Chat Title'
      header={<div>Header component</div>}
      footer={<div>Footer component</div>}
    >
      <ChatView />
    </Styled.Chat>
  )
}

export default Chat

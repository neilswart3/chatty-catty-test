import React from 'react'
import { ChatsList, Favourites } from 'src/components'
import Styled from './styles'

const Home: React.FC = () => {
  return (
    <Styled.Home header={<Favourites />}>
      <ChatsList />
    </Styled.Home>
  )
}
export default Home

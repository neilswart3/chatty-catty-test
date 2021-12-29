import React from 'react'
import { Favourite } from 'src/atoms'
import data from './data'
import Styled from './styles'

interface Props {}

const Favourites: React.FC<Props> = (props) => {
  return (
    <Styled.Favourites>
      <Styled.FavouritesList itemsAmount={data.length}>
        {data.map(({ id, firstName, lastName, image }) => (
          <Favourite
            key={id}
            id={id}
            firstName={firstName}
            lastName={lastName}
            image={image}
          />
        ))}
      </Styled.FavouritesList>
    </Styled.Favourites>
  )
}

export default Favourites

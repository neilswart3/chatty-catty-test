import React from 'react'
import Slider from 'react-slick'
import { Favourite } from 'src/atoms'
import data from './data'
import Styled from './styles'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

interface Props {}

const Favourites: React.FC<Props> = (props) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <Styled.Favourites>
      {/* <Slider {...settings}> */}
      {data.map(({ id, firstName, lastName, image }) => (
        <Favourite
          key={id}
          firstName={firstName}
          lastName={lastName}
          image={image}
        />
      ))}
      {/* </Slider> */}
    </Styled.Favourites>
  )
}

export default Favourites

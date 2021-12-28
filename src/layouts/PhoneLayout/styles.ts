import styled from '@emotion/styled/macro'
import { Paper } from '@mui/material'
import { colors } from 'src/lib'

const phoneColors = {
  shine: '#282828',
  background: '#241f21',
  accessories: '#5c5d5d',
}

const PhoneLayout = styled(Paper)`
  position: relative;
  background-color: #282828;
  height: 80vh;
  min-width: 420px;
  border-radius: 40px;
  overflow: hidden;

  &::before {
    background-color: #241f21;
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    border-radius: 30px/60px;
    height: 100%;
    width: 95%;
  }
`

const PhoneHeader = styled.div`
  position: relative;
  height: 5%;
`

const HeaderAccessories = styled.div`
  position: absolute;
  background-color: ${phoneColors.accessories};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`

const Speaker = styled(HeaderAccessories)`
  height: 5px;
  width: 100px;
  border-radius: 100px;
`

const Camera = styled(HeaderAccessories)`
  height: 16px;
  width: 16px;
  left: 75%;
`

const Content = styled(Paper)`
  background-color: ${colors.background};
  position: relative;
  height: 92%;
  width: 97%;
  border-radius: 20px;
  margin: 0 auto;
  padding: 1rem;
`

const Styled = { PhoneLayout, Content, PhoneHeader, Speaker, Camera }

export default Styled

import styled from '@emotion/styled/macro'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Paper } from '@mui/material'
import { colors } from 'src/lib'
import { tablet } from 'src/lib/theme'

const phoneColors = {
  shine: '#241f21',
  background: '#181818',
  accessories: '#5c5d5d',
}

const PhoneLayout = styled(Paper)`
  width: 100%;
  height: 100%;
  background-color: ${phoneColors.background};

  ${tablet} {
    position: relative;
    height: 93vh;
    width: 420px;
    border-radius: 40px;
    overflow: hidden;
  }

  &::before {
    background-color: ${phoneColors.shine};
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    border-radius: 30px/60px;
    height: 100%;
    width: 95%;
    filter: blur(3px);

    ${tablet} {
      content: '';
    }
  }
`

const PhoneHeader = styled.div`
  display: none;

  ${tablet} {
    position: relative;
    display: block;
    height: 5%;
  }
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

interface ContentWrapProps {
  image: string
}

const ContentWrap = styled(Paper)<ContentWrapProps>`
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: ${colors.background};
  ${({ image }) =>
    image ? `background: url(${image}}) no-repeat center/cover;` : ''}
  overflow: hidden;
  height: 100%;

  ${tablet} {
    position: relative;
    height: 92%;
    max-height: 92%;
    width: 97%;
    border-radius: 20px;
    margin: 0 auto;
  }
`

const Content = styled(PerfectScrollbar)`
  padding: 1rem;
`

const Styled = {
  PhoneLayout,
  ContentWrap,
  Content,
  PhoneHeader,
  Speaker,
  Camera,
}

export default Styled

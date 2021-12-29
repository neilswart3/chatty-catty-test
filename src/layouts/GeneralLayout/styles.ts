import styled from '@emotion/styled/macro'
import { colors } from 'src/lib'

const GeneralLayout = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

interface BackgroundProps {
  image: string
}

const Background = styled.div<BackgroundProps>`
  background-color: ${colors.white};
  background: url(${({ image }) => image}) no-repeat center/cover;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 110%;
  filter: blur(50px);
`

const Styled = { GeneralLayout, ContentWrap, Background }

export default Styled

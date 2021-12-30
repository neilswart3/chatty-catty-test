import styled from '@emotion/styled/macro'
import { Paper } from '@mui/material'
import { colors } from 'src/lib'

const LogoHeader = styled.div`
  padding: 1rem;
`

const Logo = styled(Paper)`
  background-color: ${colors.white};
  max-width: 3.5rem;
  padding-top: 3.5rem;
  position: relative;
  margin-bottom: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
  }
`

const Styled = { LogoHeader, Logo }

export default Styled

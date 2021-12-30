import styled from '@emotion/styled/macro'
import { rgba } from 'polished'
import { colors } from 'src/lib'
import GeneralLayout from '../GeneralLayout'

const AuthLayout = styled(GeneralLayout)`
  .scrollbar-container {
    position: relative;

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 80%;
      content: '';
      background: ${colors.background};
      background: linear-gradient(
        0deg,
        ${rgba(colors.background, 0.9)} 0%,
        ${rgba(colors.background, 0.5)} 50%,
        ${rgba(colors.background, 0)} 100%
      );
    }
  }
`

const Styled = { AuthLayout }

export default Styled

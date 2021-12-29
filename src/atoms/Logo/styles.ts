import styled from '@emotion/styled/macro'
import { IconButton } from '@mui/material'
import { colors } from 'src/lib'

const Logo = styled(IconButton)`
  svg {
    width: 35px;
    color: ${colors.white};
  }
`

const Styled = { Logo }

export default Styled

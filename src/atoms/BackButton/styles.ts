import styled from '@emotion/styled'
import { IconButton } from '@mui/material'

interface BackButtonProps {
  component: any
  to: string
}

const BackButton = styled(IconButton)<BackButtonProps>`
  display: block;
`

const Styled = { BackButton }

export default Styled

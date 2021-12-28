import { Avatar as MuiAvatar } from '@mui/material'
import styled from '@emotion/styled'

interface AvatarProps {
  src: string
}

const Avatar = styled(MuiAvatar)<AvatarProps>`
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.45);
`

const Styled = { Avatar }

export default Styled

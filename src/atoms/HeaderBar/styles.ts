import styled from '@emotion/styled/macro'
import { AppBar, Typography } from '@mui/material'

const HeaderBar = styled(AppBar)`
  padding: 0.5rem 0;
`

const HeaderBarInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
`

interface HeaderTitleProps {
  component: any
}

const HeaderTitle = styled(Typography)<HeaderTitleProps>``

const Styled = { HeaderBar, HeaderTitle, HeaderBarInner }

export default Styled

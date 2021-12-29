import styled from '@emotion/styled/macro'
import {
  Card,
  CardActionArea as MuiCardActionArea,
  CardHeader as MuiCardHeader,
} from '@mui/material'

const ChatsItem = styled(Card)`
  background: transparent;
  overflow: initial;

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`

interface StyledActionAreaProps {
  to: string
  component: any
}

const CardActionArea = styled(MuiCardActionArea)<StyledActionAreaProps>`
  background-color: transparent;
  border-radius: 0.25rem;
`

const CardHeader = styled(MuiCardHeader)`
  align-items: center;
  padding: 0.5rem;

  .MuiCardHeader-action {
    margin: 0;
    align-self: auto;
  }
`

const Styled = { ChatsItem, CardActionArea, CardHeader }

export default Styled

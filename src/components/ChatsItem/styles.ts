import styled from '@emotion/styled'
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

const CardActionArea = styled(MuiCardActionArea)`
  background-color: transparent;
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

import styled from '@emotion/styled/macro'
import { Paper } from '@mui/material'
import { colors } from 'src/lib'

interface BubbleProps {
  author: boolean
}

const BubbleContainer = styled.div<BubbleProps>`
  display: flex;
  margin-bottom: 1rem;
  justify-content: flex-${({ author }) => (author ? 'end' : 'start')};
`

const Bubble = styled(Paper)<BubbleProps>`
  display: inline-block;
  padding: 1rem;
  padding-bottom: 0.75rem;
  border-radius: 2rem;
  max-width: 80%;
  background-color: ${({ author }) =>
    author ? colors.backgroundDark : colors.backgroundLight};
`

const ContentWrap = styled.div``

const TimeWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`

const Styled = { BubbleContainer, Bubble, ContentWrap, TimeWrap }

export default Styled

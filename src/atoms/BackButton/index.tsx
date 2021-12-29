import { Link } from 'react-router-dom'
import { KeyboardBackspace } from '@mui/icons-material'
import Styled from './styles'

interface Props {
  path?: string
}

const BackButton: React.FC<Props> = ({ path = '/' }) => {
  return (
    <Styled.BackButton size='large' to={path} component={Link}>
      <KeyboardBackspace fontSize='large' />
    </Styled.BackButton>
  )
}
export default BackButton

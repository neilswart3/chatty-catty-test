import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Styled from './styles'

const Welcome: React.FC = () => {
  return (
    <Styled.Welcome>
      <Button component={Link} to='/login' fullWidth variant='outlined'>
        Log in
      </Button>
      <Button component={Link} to='/register' fullWidth variant='contained'>
        Register
      </Button>
    </Styled.Welcome>
  )
}
export default Welcome

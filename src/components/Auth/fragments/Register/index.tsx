import { EmailOutlined, PersonOutlined, KeyOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { TextField } from 'src/atoms'
import Styled from './styles'

const initValues = {
  name: '',
  email: '',
  password: '',
}

interface Values {
  name: string
  email: string
  password: string
}

const Register: React.FC = () => {
  const [values, setValues] = useState<Values>(initValues)

  const handleChange = (e: any): void => {}

  const handleSubmit = (e: any): void => {
    e.preventDefault()
  }

  return (
    <Styled.Register onSubmit={handleSubmit}>
      <TextField
        label='Name'
        name='name'
        value={values.name}
        onChange={handleChange}
        Icon={PersonOutlined}
      />
      <TextField
        label='Email'
        name='email'
        type='email'
        value={values.email}
        onChange={handleChange}
        Icon={EmailOutlined}
      />
      <TextField
        label='Password'
        name='password'
        type='password'
        value={values.password}
        onChange={handleChange}
        Icon={KeyOutlined}
      />
      <Styled.Button fullWidth variant='contained' type='submit'>
        Submit
      </Styled.Button>
    </Styled.Register>
  )
}
export default Register

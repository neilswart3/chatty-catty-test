import React, { useState } from 'react'
import { EmailOutlined, KeyOutlined } from '@mui/icons-material'
import { TextField } from 'src/atoms'
import { registerRequest } from 'src/store/slices/auth'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks/redux'
import { RegisterRequest } from 'src/store/slices/auth/types'
import Styled from './styles'

const initValues = {
  email: 'neilswart3@gmail.com',
  password: '123456',
}

interface Values {
  email: string
  password: string
}

const Register: React.FC = () => {
  const [values, setValues] = useState<Values>(initValues)

  const auth = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const handleChange = (e: any): void => {
    const { name, value } = e.target

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleClick = (): void => {
    dispatch(registerRequest({ ...values } as unknown as RegisterRequest))
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault()
  }

  return (
    <Styled.Register onSubmit={handleSubmit}>
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
      <Styled.Button
        onClick={handleClick}
        fullWidth
        variant='contained'
        type='submit'
      >
        Submit
      </Styled.Button>
    </Styled.Register>
  )
}
export default Register

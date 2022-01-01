import React, { useState } from 'react'
import { EmailOutlined, KeyOutlined } from '@mui/icons-material'
import { ErrorAlert, TextField } from 'src/atoms'
import { registerRequest } from 'src/store/slices/auth'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks/redux'
import { RegisterRequest } from 'src/store/slices/auth/types'
import Styled from './styles'
import { CircularProgress } from '@mui/material'

const initValues = {
  email: '',
  password: '',
}

interface Values {
  email: string
  password: string
}

const Register: React.FC = () => {
  const [values, setValues] = useState<Values>(initValues)

  const { data, isLoading, error } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  console.log('data:', data)
  console.log('isLoading:', isLoading)
  console.log('error:', error)

  const handleChange = (e: any): void => {
    const { name, value } = e.target

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault()

    dispatch(registerRequest({ ...values } as unknown as RegisterRequest))

    if (!error) {
      setValues(initValues)
    }
  }

  return (
    <Styled.Register onSubmit={handleSubmit}>
      {error && <ErrorAlert message={error.message} />}
      <TextField
        label='Email'
        name='email'
        type='email'
        value={values.email}
        onChange={handleChange}
        Icon={EmailOutlined}
        disabled={isLoading}
      />
      <TextField
        label='Password'
        name='password'
        type='password'
        value={values.password}
        onChange={handleChange}
        Icon={KeyOutlined}
        disabled={isLoading}
      />
      <Styled.Button
        fullWidth
        variant='contained'
        type='submit'
        disabled={isLoading}
        startIcon={
          isLoading ? <CircularProgress color='secondary' size={30} /> : null
        }
      >
        Submit
      </Styled.Button>
    </Styled.Register>
  )
}
export default Register

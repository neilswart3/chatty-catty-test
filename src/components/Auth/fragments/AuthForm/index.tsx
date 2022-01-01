import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { EmailOutlined, KeyOutlined } from '@mui/icons-material'
import { ErrorAlert, TextField } from 'src/atoms'
import { useAppSelector } from 'src/lib/hooks/redux'
import Styled from './styles'

const initValues = {
  email: '',
  password: '',
}

export interface Values {
  email: string
  password: string
}

interface Props {
  onSubmit: (values: Values) => void
}

const AuthForm: React.FC<Props> = (props) => {
  const { onSubmit } = props
  const navigate = useNavigate()
  const [values, setValues] = useState<Values>(initValues)

  const { data, isLoading, error } = useAppSelector((state) => state.auth)

  const handleChange = (e: any): void => {
    const { name, value } = e.target

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault()

    onSubmit({ ...values })

    if (!error) {
      setValues(initValues)
    }

    if (!error && data) {
      navigate('/')
    }
  }

  return (
    <Styled.AuthForm onSubmit={handleSubmit}>
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
    </Styled.AuthForm>
  )
}
export default AuthForm

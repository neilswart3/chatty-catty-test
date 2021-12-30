import { TextField as MuiTextField } from '@mui/material'
import React from 'react'
import Styled from './styles'

interface Props {
  name: string
  label: string
  type?: string
  value: string
  onChange(e: any): void
  Icon: React.ElementType
}

const TextField: React.FC<Props> = (props) => {
  const { name, label, type = 'text', value, onChange, Icon } = props

  return (
    <Styled.TextFieldWrapper>
      <Icon />
      <MuiTextField
        name={name}
        id={name}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        variant='standard'
        margin='dense'
        fullWidth
      />
    </Styled.TextFieldWrapper>
  )
}
export default TextField

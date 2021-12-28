import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import palette from './palette'

let theme = createTheme({
  palette,
})

theme = responsiveFontSizes(theme)

export default theme

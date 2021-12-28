import { createTheme, responsiveFontSizes, Palette } from '@mui/material/styles'
import palette from './palette'

let theme = createTheme({
  palette: palette as Palette,
})

theme = responsiveFontSizes(theme)

export default theme

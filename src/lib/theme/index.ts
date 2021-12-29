import { createTheme, responsiveFontSizes, Palette } from '@mui/material/styles'
import components from './components'
import palette from './palette'

let theme = createTheme({
  palette: palette as Palette,
  components,
})

theme = responsiveFontSizes(theme)

export const tablet = theme.breakpoints.up('sm')

export default theme

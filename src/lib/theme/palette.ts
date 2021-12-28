import colors from './colors'

const palette = {
  mode: 'dark',
  primary: {
    main: colors.purple,
    dark: colors.purpleDark,
    light: colors.purpleLight,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.gray,
    dark: colors.grayDark,
    light: colors.grayLight,
    contrastText: colors.white,
  },
  background: {
    default: colors.background,
    paper: colors.backgroundLight,
  },
  info: {
    main: colors.blue,
    dark: colors.blueDark,
    light: colors.blueLight,
    contrastText: colors.white,
  },
  warning: {
    main: colors.orange,
    dark: colors.orangeDark,
    light: colors.orangeLight,
    contrastText: colors.white,
  },
  success: {
    main: colors.green,
    dark: colors.greenDark,
    light: colors.greenLight,
    contrastText: colors.white,
  },
}

export default palette

import { Components } from '@mui/material'
import colors from './colors'

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 40,
        padding: '1rem',
        fontSize: 18,
      },
      outlined: {
        color: colors.white,
        borderColor: colors.white,
        borderWidth: 2,
        backdropFilter: 'blur(20px)',
        ':hover': {
          borderWidth: 2,
          borderColor: colors.white,
        },
      },
      contained: {
        color: colors.purple,
        backgroundColor: colors.white,
        ':hover': {
          color: colors.purple,
          backgroundColor: colors.white,
        },
      },
    },
  },
}

export default components

import { FormattedError } from './types'

const formatError = (err: any): FormattedError => {
  const error = JSON.parse(err.message)

  return error
}

export default formatError

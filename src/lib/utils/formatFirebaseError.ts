import { MessageCode } from './types'

const errorMessages = {
  EMAIL_EXISTS: 'This email is already in use. Try logging in instead',
}

const formatFirebaseError = (err: any): string => {
  const { customData } = JSON.parse(JSON.stringify(err))
  const { code, message: messageCode } = customData._tokenResponse.error

  return JSON.stringify({
    code,
    messageCode,
    message: errorMessages[messageCode as MessageCode],
  })
}

export default formatFirebaseError

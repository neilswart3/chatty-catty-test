import { Code } from './types'

const errorMessages = {
  'auth/email-already-in-use':
    'This email is already in use. Try logging in instead.',
  'auth/invalid-email': 'Invalid email. Please enter a valid email.',
}

const formatFirebaseError = (err: any): string => {
  const { code } = JSON.parse(JSON.stringify(err))

  return JSON.stringify({
    code,
    message: errorMessages[code as Code],
  })
}

export default formatFirebaseError

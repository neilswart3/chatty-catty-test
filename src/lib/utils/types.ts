export type Code = 'auth/email-already-in-use' | 'auth/invalid-email'

export type FormattedError = {
  code: Code
  message: string
}

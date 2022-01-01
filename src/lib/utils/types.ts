export type MessageCode = 'EMAIL_EXISTS'

export type FormattedError = {
  code: number
  messageCode: MessageCode
  message: string
}

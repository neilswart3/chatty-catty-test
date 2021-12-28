const getInitials = (firstName: string, lastName?: string): string => {
  if (!lastName) return firstName[0]

  return firstName[0] + lastName[0]
}

export default getInitials

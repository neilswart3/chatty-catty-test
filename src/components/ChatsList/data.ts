import { v4 as uuid } from 'uuid'

export type ChatData = {
  id: string
  firstName: string
  lastName: string
  image: string
  time: Date
  lastMessage: string
}

const data: ChatData[] = [
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    image: 'https://via.placeholder.com/150?Text=John Doe',
    time: new Date(),
    lastMessage: 'Hey There',
  },
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    image: 'https://via.placeholder.com/150?Text=John Doe',
    time: new Date(),
    lastMessage: 'Hey There',
  },
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    image: 'https://via.placeholder.com/150?Text=John Doe',
    time: new Date(),
    lastMessage: 'Hey There',
  },
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    image: 'https://via.placeholder.com/150?Text=John Doe',
    time: new Date(),
    lastMessage: 'Hey There',
  },
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    image: 'https://via.placeholder.com/150?Text=John Doe',
    time: new Date(),
    lastMessage: 'Hey There',
  },
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    image: 'https://via.placeholder.com/150?Text=John Doe',
    time: new Date(),
    lastMessage: 'Hey There',
  },
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    image: 'https://via.placeholder.com/150?Text=John Doe',
    time: new Date(),
    lastMessage: 'Hey There',
  },
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    image: 'https://via.placeholder.com/150?Text=John Doe',
    time: new Date(),
    lastMessage: 'Hey There',
  },
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    image: 'https://via.placeholder.com/150?Text=John Doe',
    time: new Date(),
    lastMessage: 'Hey There',
  },
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    image: 'https://via.placeholder.com/150?Text=John Doe',
    time: new Date(),
    lastMessage: 'Hey There',
  },
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    image: 'https://via.placeholder.com/150?Text=John Doe',
    time: new Date(),
    lastMessage: 'Hey There',
  },
  {
    id: uuid(),
    firstName: 'John',
    lastName: 'Doe',
    image: 'https://via.placeholder.com/150?Text=John Doe',
    time: new Date(),
    lastMessage: 'Hey There',
  },
]

export default data

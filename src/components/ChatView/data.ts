import { v4 as uuid } from 'uuid'

type ChatMessage = {
  id: string
  date: Date
  content: string
  author: string
}

type Participant = {
  id: string
  firstName: string
  lastName: string
  image: string
}

export type Chat = {
  id: string
  message: ChatMessage
}

const conversation: Chat[] = [
  {
    id: uuid(),
    message: {
      id: uuid(),
      date: new Date(),
      author: 'new author',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo consequat consectetur. Morbi semper at neque id porttitor. Quisque ac consectetur velit, eu porttitor nunc.',
    },
  },
  {
    id: uuid(),
    message: {
      id: uuid(),
      date: new Date(),
      author: 'other author',
      content:
        'Proin mattis nunc et posuere rutrum. Proin eget tellus eu diam egestas volutpat. Praesent feugiat ultricies venenatis.',
    },
  },
  {
    id: uuid(),
    message: {
      id: uuid(),
      date: new Date(),
      author: 'new author',
      content: 'Lorem ipsum',
    },
  },
]

const data = {
  participants: {
    me: {
      id: uuid(),
      firstName: 'David',
      lastName: 'Smith',
      image: '',
    },
    you: {
      id: uuid(),
      firstName: 'John',
      lastName: 'Doe',
      image: '',
    },
  },
  conversation,
}

export default data

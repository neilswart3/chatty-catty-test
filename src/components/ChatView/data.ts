type ChatMessage = {
  id: string
  date: Date
  content: string
  author: string
}

export type Chat = {
  id: string
  message: ChatMessage
}

const data: Chat[] = [
  {
    id: 'sdsadfasdf',
    message: {
      id: 'you',
      date: new Date(),
      author: 'new author',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo consequat consectetur. Morbi semper at neque id porttitor. Quisque ac consectetur velit, eu porttitor nunc.',
    },
  },
  {
    id: 'sdsadfasdfasdf',
    message: {
      id: 'me',
      date: new Date(),
      author: 'other author',
      content:
        'Proin mattis nunc et posuere rutrum. Proin eget tellus eu diam egestas volutpat. Praesent feugiat ultricies venenatis.',
    },
  },
  {
    id: 'sdsadfasdf',
    message: {
      id: 'you',
      date: new Date(),
      author: 'new author',
      content: 'Lorem ipsum',
    },
  },
]

export default data

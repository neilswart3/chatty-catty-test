import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Chat, Auth, Login, Register } from 'src/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='chat/:chatId' element={<Chat />} />
        <Route path='auth' element={<Auth />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route index element={<Home />} />
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Chat } from 'src/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='chat/:chatId' element={<Chat />} />
        <Route index element={<Home />} />
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

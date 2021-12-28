import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GeneralLayout } from 'src/layouts'
import { Home, Chat } from 'src/pages'

function App() {
  return (
    <BrowserRouter>
      <GeneralLayout>
        <Routes>
          <Route path='chat/:chatId' element={<Chat />} />
          <Route index element={<Home />} />
          <Route path='*' element={<div>Not found</div>} />
        </Routes>
      </GeneralLayout>
    </BrowserRouter>
  )
}

export default App

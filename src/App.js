import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Movie } from './page'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

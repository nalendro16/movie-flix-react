import './App.css'

import { Movie } from './components'

function App() {
  return (
    <div className='App'>
      <Movie title='Netflix Original' />
      <Movie title='Trending Now' />
      <Movie title='Top Rated' />
      <Movie title='Action Movie' />
      <Movie title='Comedy Movie' />
      <Movie title='Horror Movie' />
      <Movie title='Romance Movie' />
      <Movie title='Documentaries Movie' />
    </div>
  )
}

export default App

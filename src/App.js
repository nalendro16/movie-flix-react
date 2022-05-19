import './App.css'

import { Movie } from './components'
import API from './request.js'

function App() {
  return (
    <div className='App'>
      <Movie title='Netflix Original' url={API.fetchNetflixOriginals} />
      <Movie title='Trending Now' url={API.fetchTrending} />
      <Movie title='Top Rated' url={API.fetchTopRated} />
      <Movie title='Action Movie' url={API.fetchActionMovie} />
      <Movie title='Comedy Movie' url={API.fetchCommedyMovie} />
      <Movie title='Horror Movie' url={API.fetchHorrorMovie} />
      <Movie title='Romance Movie' url={API.fetchRomanceMovie} />
      <Movie title='Documentaries Movie' url={API.fetchDocumentariesMovie} />
    </div>
  )
}

export default App

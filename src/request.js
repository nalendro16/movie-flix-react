const API_KEY = 'b535e50b455339abe7294a6e7fefcfda'

const API = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchCommedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentariesMovie: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default API

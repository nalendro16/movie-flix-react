import React from 'react'
import API from '../hooks/utils/request'
import { MovieList } from './MovieList'

export const Movie = () => {
  return (
    <div className='w-screen my-4'>
      <div>
        <p className='font-bold text-left ml-4 mb-4'>Trending Movie</p>
        <MovieList url={API.fetchTrending} />
      </div>
      <div>
        <p className='font-bold text-left ml-4 mb-4'>Action Movie</p>
        <MovieList url={API.fetchActionMovie} />
      </div>
      <div>
        <p className='font-bold text-left ml-4 mb-4'>Commedy Movie</p>
        <MovieList url={API.fetchCommedyMovie} />
      </div>
      <div>
        <p className='font-bold text-left ml-4 mb-4'>Docummentaries Movie</p>
        <MovieList url={API.fetchDocumentariesMovie} />
      </div>
      <div>
        <p className='font-bold text-left ml-4 mb-4'>
          Horror and Triller Movie
        </p>
        <MovieList url={API.fetchHorrorMovie} />
      </div>
      <div>
        <p className='font-bold text-left ml-4 mb-4'>Netflix Original Movie</p>
        <MovieList url={API.fetchNetflixOriginals} />
      </div>
      <div>
        <p className='font-bold text-left ml-4 mb-4'>Romance Movie</p>
        <MovieList url={API.fetchRomanceMovie} />
      </div>
      <div>
        <p className='font-bold text-left ml-4 mb-4'>Top Rated Movie</p>
        <MovieList url={API.fetchTopRated} />
      </div>
    </div>
  )
}

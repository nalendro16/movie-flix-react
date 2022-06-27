import React from 'react'
import API from '../hooks/utils/request'
import { MovieList } from './MovieList'

export const Movie = () => {
  return (
    <div className='my-4'>
      <div>
        <p className='font-bold text-left ml-4 mb-4'>Trending Movie</p>
        <MovieList url={API.fetchTrending} />
      </div>
      <div className='mt-4'>
        <p className='font-bold text-left ml-4 mb-4'>Action Movie</p>
        <MovieList url={API.fetchActionMovie} />
      </div>
      <div className='mt-4'>
        <p className='font-bold text-left ml-4 mb-4'>Commedy Movie</p>
        <MovieList url={API.fetchCommedyMovie} />
      </div>
      <div className='mt-4'>
        <p className='font-bold text-left ml-4 mb-4'>Docummentaries Movie</p>
        <MovieList url={API.fetchDocumentariesMovie} />
      </div>
      <div className='mt-4'>
        <p className='font-bold text-left ml-4 mb-4'>
          Horror and Triller Movie
        </p>
        <MovieList url={API.fetchHorrorMovie} />
      </div>
      <div className='mt-4'>
        <p className='font-bold text-left ml-4 mb-4'>Netflix Original Movie</p>
        <MovieList url={API.fetchNetflixOriginals} />
      </div>
      <div className='mt-4'>
        <p className='font-bold text-left ml-4 mb-4'>Romance Movie</p>
        <MovieList url={API.fetchRomanceMovie} />
      </div>
      <div className='mt-4'>
        <p className='font-bold text-left ml-4 mb-4'>Top Rated Movie</p>
        <MovieList url={API.fetchTopRated} />
      </div>
    </div>
  )
}

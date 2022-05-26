import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { MovieCard } from '../components/MovieCard'
import API from '../request'

const image_url = 'https://image.tmdb.org/t/p/original'
const url = API.fetchTrending

export const Movie = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(url)
      setMovie(request?.data?.results)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(movie)

  return (
    <div className='w-full h-screen my-4'>
      <p className='font-bold text-left ml-4 mb-4'>Trending Movie</p>
      <div className='w-full flex gap-1 h-screen m-4 max-w-screen overflow-x-scroll'>
        {movie &&
          movie.map((item) => (
            <MovieCard
              poster={item.poster_path}
              image_url={image_url}
              id={item.id}
              key={item.id}
            />
          ))}
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { MovieCard } from '../components/MovieCard'
import API from '../request'

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

  return (
    <div>
      <div>
        {movie &&
          movie.map((item) => (
            <MovieCard
              poster={item.poster_path}
              name={item.name}
              id={item.id}
              key={item.id}
            />
          ))}
      </div>
    </div>
  )
}

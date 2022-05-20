import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from '../axios'

const image_url = 'https://image.tmdb.org/t/p/original'

export const Movie = ({ title, url }) => {
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
    <div>
      <h2>{title}</h2>
      <div>
        {movie.map((item) => (
          <img
            src={`${image_url}${item.poster_path}`}
            alt={`poster of ${item.name}`}
            className='img-poster'
            key={item.id}
          />
        ))}
      </div>
    </div>
  )
}

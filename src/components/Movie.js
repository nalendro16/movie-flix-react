import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from '../axios'

export const Movie = ({ title, url }) => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(url)
      setMovie(request.data)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(movie)
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <img src='' alt='' className='img-poster' />
      </div>
    </div>
  )
}

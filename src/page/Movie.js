import React, { useEffect, useRef, useState } from 'react'
import { image } from '../assets'
import axios from '../axios'
import { MovieCard } from '../components/MovieCard'
import API from '../request'

const image_url = 'https://image.tmdb.org/t/p/original'
const url = API.fetchTrending

export const Movie = () => {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)
  const container = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const request = await axios.get(url)
      if (request.status === 200) {
        setMovie(request?.data?.results)
        setLoading(false)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickLeft = () => {
    container.current.scrollLeft += 250
  }

  const handleClickRight = () => {
    container.current.scrollLeft -= 250
  }

  return (
    <div className='w-screen my-4'>
      <p className='font-bold text-left ml-4 mb-4'>Trending Movie</p>
      <div
        ref={container}
        className='h-56 overflow-x-auto flex gap-3 before:shrink-0 before:w-[5vw] after:shrink-0 after:w-[5vw] container-snap scroll-touch scroll-smooth'
      >
        {movie &&
          movie.map((item) => (
            <MovieCard
              loading={loading}
              poster={item.poster_path}
              image_url={image_url}
              id={item.id}
              key={item.id}
            />
          ))}
      </div>
      <div
        className='h-48 w-16 absolute right-0 top-14 flex items-center hover:bg-black opacity-75'
        onClick={handleClickRight}
      >
        <img src={image.icon_right} alt='Kanan' className='w-8 h-8' />
      </div>
      <div
        className='h-48 w-16 absolute leftt-0 top-14 flex items-center hover:bg-black opacity-75'
        onClick={handleClickLeft}
      >
        <img src={image.icon_left} alt='' className='w-8 h-8' />
      </div>
    </div>
  )
}

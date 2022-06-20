import React, { useRef } from 'react'
import { image } from '../assets'
import { Loading } from '../components/Loading'
import { MovieCard } from '../components/MovieCard'
import { useFetch } from '../hooks/useFetch'
import API from '../hooks/utils/request'

const image_url = 'https://image.tmdb.org/t/p/original'
const url = API.fetchTrending

export const Movie = () => {
  const container = useRef(null)

  const { movieData, loading } = useFetch({ url })

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
        className='h-56 overflow-x-auto flex flex-row gap-3 before:shrink-0 before:w-[5vw] after:shrink-0 after:w-[5vw] container-snap scroll-touch scroll-smooth'
      >
        {!loading ? (
          movieData.map((item) => (
            <MovieCard
              loading={loading}
              poster={item.poster_path}
              image_url={image_url}
              id={item.id}
              key={item.id}
            />
          ))
        ) : (
          <Loading />
        )}
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

import React from 'react'

const image_url = 'https://image.tmdb.org/t/p/original'

export const MovieCard = ({ poster, name, id }) => {
  return (
    <div className='w-1/6 flex flex-col'>
      <p className='font-semibold text-xs'>{name}</p>
      <img
        src={image_url + poster}
        alt='placeholder poster'
        className='w-3/4'
      />
    </div>
  )
}

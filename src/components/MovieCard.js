import React from 'react'

export const MovieCard = ({ poster, name, id, image_url }) => {
  return (
    <div className='w-32 h-40 bg-yellow-100 items-center shrink-0 snap-center'>
      <img src={image_url + poster} alt='placeholder poster' className='' />
    </div>
  )
}

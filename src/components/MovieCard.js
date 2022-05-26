import React from 'react'

export const MovieCard = ({ poster, name, id, image_url }) => {
  return (
    <div className='w-4/5 h-fit flex flex-col bg-yellow-100 hover:w-5/6 transition-transform'>
      <img src={image_url + poster} alt='placeholder poster' className='w-80' />
    </div>
  )
}

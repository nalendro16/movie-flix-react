import React from 'react'

export const MovieCard = ({ poster, loading, image_url }) => {
  return (
    <div
      className={`w-full max-h-24 object-contain mr-3 ${
        loading ? 'animate-pulse' : ''
      }`}
    >
      <img src={image_url + poster} alt='placeholder poster' className='' />
    </div>
  )
}

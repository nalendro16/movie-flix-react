import React from 'react'

export const MovieCard = ({ poster, loading, image_url }) => {
  return (
    <div
      className={`w-32 h-42 bg-yellow-100 items-center shrink-0 snap-center hover:w-36 hover:h-44 ${
        loading ? 'animate-pulse' : ''
      }`}
    >
      <img src={image_url + poster} alt='placeholder poster' className='' />
    </div>
  )
}

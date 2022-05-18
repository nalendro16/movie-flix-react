import React from 'react'

export const Movie = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <img src='' alt='' className='img-poster' />
      </div>
    </div>
  )
}

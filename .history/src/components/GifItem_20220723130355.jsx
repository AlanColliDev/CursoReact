import React from 'react'

// si pongo props heredo todas las propiedades que traje react, 
// seria mas practico desestructurar
export const GifItem = ({title, url}) => {
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

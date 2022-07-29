import React from 'react'

// si pongo props heredo todas las propiedades que traje react, 
// seria mas practico desestructurar
export const GifItem = ({title, url}) => {

    console.log(title, url)

  return (
    <div>GifItem</div>
  )
}

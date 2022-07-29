import { useEffect, useState} from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// nunca se debe de llamar expliscitamante a una funcion en un functional component, porque se reprocesa
export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category );

    // en el map de images NOTA QUE NO SE USAN LLAVES
    // PARA AHACER UN RETUR EXPLISCITO SSE USA EL PARENTESIS
    return (
        <>
            <h3>{ category }</h3>

            <div className='card-grid'>
                { 
                    images.map((image) => (
                        <GifItem 
                            key= { image.id } 
                            // image = { image }
                            // title = {image.title}
                            // url = {image.url}
                            {...image } //buena practica usando el operador spreed
                        />
                    ))
                }
            </div>
        </>
    )
}

import { useEffect, useState} from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

// nunca se debe de llamar expliscitamante a una funcion en un functional component, porque se reprocesa
export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    // La tarea de fernando fue obtener los gifs de cada elemento
    const getImages = async () => {
        const listImages = await getGifs( category );
        setImages( listImages );
    };

    // Enviar las llaves vacias quiere decir que el useEffect solo se ejecutara la primera vez, ya 
    // que la primera vez cumple porque esta vacio, luego se llena y ya no se vuelve a ejecutar
    useEffect( () => {
        getImages(category);
    }, [] );
    // Si uso AWAIT, la funcion debe ser async

    // en el map de images NOTA QUE NO SE USAN LLAVES
    // PARA AHACER UN RETUR EXPLISCITO SSE USA EL PARENTESIS
    return (
        <>
            <h3>{ category }</h3>

            <div className='card-grid'>
                {
                    images.map(({ id, title }) => (
                        <GifItem />
                    ))
                }
            </div>
        </>
    )
}

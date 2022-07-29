import { useEffect, useState} from 'react';
import { getGifs } from '../helpers/getGifs';

// nunca se debe de llamar expliscitamante a una funcion en un functional component, porque se reprocesa
export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    // La tarea de fernando fue obtener los gifs de cada elemento
    const getImages = () => {
        const listImages = await getGifs( category );
    };

    // Enviar las llaves vacias quiere decir que el useEffect solo se ejecutara la primera vez, ya 
    // que la primera vez cumple porque esta vacio, luego se llena y ya no se vuelve a ejecutar
    useEffect( () => {
        getImages(category);
    }, [] );
    // Si uso AWAIT, la funcion debe ser async
    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}

// Un hook no es mas que una funcion, un fucntional component es cuando el callback regresa un elemento jsx
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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
    return {
        images,
        isLoading
    }
}

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

// nunca se debe de llamar expliscitamante a una funcion en un functional component, porque se reprocesa
export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState(5);
    
    getGifs(category);
    // Si uso AWAIT, la funcion debe ser async
    return (
        <>
            <h3>{ category }</h3>
            <p>Hola mundo</p>
            <h4>{counter}</h4>

            <button onClick={() => setCounter(counter + 1) }>+1</button>
        </>
    )
}

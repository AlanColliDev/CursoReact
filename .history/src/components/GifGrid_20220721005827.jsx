import { GetGifs } from '../helpers/getGifs';

// nunca se debe de llamar expliscitamante a una funcion en un functional component, porque se reprocesa
export const GifGrid = ({ category }) => {

    GetGifs
    // Si uso AWAIT, la funcion debe ser async
    return (
        <>
            <h3>{ category }</h3>
            <p>Hola mundo</p>
        </>
    )
}

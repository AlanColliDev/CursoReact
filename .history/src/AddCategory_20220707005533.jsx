import { useState } from 'react';


export const AddCategory = () => {

    const [category, setCategory] = useState('PXNDX');

    return (
        <input 
            type="text" 
            placeholder="Ingrese un tema a buscar..."
        />
    )
}
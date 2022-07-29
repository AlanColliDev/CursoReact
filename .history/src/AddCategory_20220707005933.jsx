import { useState } from 'react';


export const AddCategory = () => {

    const [category, setCategory] = useState('PXNDX');

    const OnChangeCategory = (e) => {
        console.log(e.target.value);
        // setCategory(e);
    }
    return (
        <input 
            type = "text" 
            placeholder = "Ingrese un tema a buscar..."
            value = { category }
            onChange = { OnChangeCategory }
        />
    )
}
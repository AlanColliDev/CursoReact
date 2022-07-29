import { useState } from 'react';


export const AddCategory = ({ HandleAddCategory }) => {

    const [category, setCategory] = useState('PXNDX');

    const OnChangeCategory = (e) => {
        setCategory(e.target.value);
    }
    const OnSubmitForm = (event) => {
        event.preventDefault();
        // const [categories]  = setCategories();
        // console.log(category);
        // HandleAddCategory([category]);//este era la forma en que yo lo hice, pero esto genera que se sobreescriba todo el arreglo
    /**La manera correcta es hacer un callback del Setter, para obtener el estado actual y asignar el valor nuevo */
        HandleAddCategory((categories) => [category, ...categories]);
    }
    return (
        <form onSubmit={(event) => OnSubmitForm(event) }>
            <input 
                type = "text" 
                placeholder = "Ingrese un tema a buscar..."
                value = { category }
                onChange = { OnChangeCategory }
            />
        </form>
        
    )
}
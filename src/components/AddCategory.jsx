import { useState } from 'react';


export const AddCategory = ({ HandleAddCategory }) => {

    const [category, setCategory] = useState('');

    const OnChangeCategory = (e) => {
        setCategory(e.target.value);
    }
    // evento que se ejecuta al dar enter en el boton
    const OnSubmitForm = (event) => {
        event.preventDefault();
        if(category.length <= 1) return;
        // HandleAddCategory([category]);//este era la forma en que yo lo hice, pero esto genera que se sobreescriba todo el arreglo
    /**La manera correcta es hacer un callback del Setter, para obtener el estado actual y asignar el valor nuevo */
        // HandleAddCategory((categories) => [category, ...categories]); ya no se usa porque ahora es de la otra manera
        HandleAddCategory(category.trim());
        setCategory('');
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
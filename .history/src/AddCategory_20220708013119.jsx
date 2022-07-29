import { useState } from 'react';


export const AddCategory = ({setCategories}) => {

    const [category, setCategory] = useState('PXNDX');

    const OnChangeCategory = (e) => {
        setCategory(e.target.value);
    }
    const OnSubmitForm = (event) => {
        event.preventDefault();
        // const [categories]  = setCategories();
        // console.log(category);
        setCategories([category]);
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
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
        HandleAddCategory([category]);
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
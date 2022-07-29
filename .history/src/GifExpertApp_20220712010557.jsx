import { AddCategory } from './AddCategory';
import { useState } from 'react';
/**Se le pone el JSX porque no es unicamente un archivo JS, ya que en su interior contendrá un functional component */
// import React from 'react' --despues de la v17 de react ya no es necesario estarlo importando en cada file
export const GifExpertApp = () => {

   const [categories, setCategories] = useState([ 'One Punch', 'Naruto', 'Dragon Ball' ])

   const OnAddCategory = (category) => {
      if( categories.includes(category) ) return;
      setCategories( [category, ...categories] );
   }
   

   return (
   <>
      {/* Este es el titulo del componente */}
      <h1>GifExpertApp</h1>

      {/* Input de Buscador */}
      {/* <AddCategory HandleAddCategory = {setCategories} /> 1st way to do set state */}
      <AddCategory HandleAddCategory = { OnAddCategory } />

      {/* Lista de Gif Item */}
      <ol>
         {categories.map( (item) => {
            return (
               <div key={item}>
                  <h3>{item</h3>
                  <li>{item}</li>
               </div>
            )
            // return <li key={item}>{item}</li>
         })}
      </ol>
         {/* Item Gif */}
      
   </>
  )
}

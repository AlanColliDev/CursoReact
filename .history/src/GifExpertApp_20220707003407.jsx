import { useState } from 'react';
/**Se le pone el JSX porque no es unicamente un archivo JS, ya que en su interior contendrá un functional component */
// import React from 'react' --despues de la v17 de react ya no es necesario estarlo importando en cada file
export const GifExpertApp = () => {

   const [categories, setCategories] = useState([ 'One Punch', 'Naruto', 'Dragon Ball' ])

   const OnAdd = () => {
      // setCategories(categories.push('Ghost'));
      console.log("some");
   }

   return (
   <>
      {/* Este es el titulo del componente */}
      <h1>GifExpertApp</h1>

      {/* Input de Buscador */}

      {/* Lista de Gif Item */}
      <button onClick={OnAdd}>Agregar item</button>
      <ol>
         {categories.map( item => {
            return <li key={item}>item</li>
         })}
         
      </ol>
         {/* Item Gif */}
      
   </>
  )
}

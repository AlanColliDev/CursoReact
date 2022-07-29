import { AddCategory } from './components/AddCategory';
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
      <h1>GifExpertApp</h1>

      <AddCategory HandleAddCategory = { OnAddCategory } />

         {
            categories.map( ( category ) => (
               <GifGrid 
                  key={category} 
                  category = {category}
               />
            ))
         }
      
   </>
  )
}

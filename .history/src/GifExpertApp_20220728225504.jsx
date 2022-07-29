import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { useState } from 'react';
/**Se le pone el JSX porque no es unicamente un archivo JS, ya que en su interior contendrá un functional component */
// import React from 'react' --despues de la v17 de react ya no es necesario estarlo importando en cada file
export const GifExpertApp = () => {

   const [categories, setCategories] = useState([ 'Spiderman' ])

   const OnAddCategory = (category) => {
      if( categories.includes(category) ) return;
      setCategories( [category, ...categories] );
   }
   // aJ16I10gt55ey1OiM8UpKKHQbomn51i3

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

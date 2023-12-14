import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Link } from 'react-router-dom';

const Spoonacular = () => {

    const { data, isLoading, error, makeRequest }   = useRequestData()

    useEffect(()=>{
        fetchRecipes()
    }, [  ])

    
    const fetchRecipes = ()=> {
        makeRequest("https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert&apiKey=84ff0b7c34cb4a18adc65f24226cced7")
    }
   


  return (
    <div>
           <h1 className='mb-6 text-3xl font-bold text-center'>Get Recipe Information</h1>
     

            { isLoading && <Loader/>}

            { error && <h2>Error ...</h2>}


            { data && data.recipes && (

            <div>
            {data.recipes.map(recipe => (
            <div key={recipe.id}>
                <h1>{recipe.title}</h1>
                <div>
                    <img src={recipe.image} alt={recipe.title} /> {/* Display the recipe image */}
                </div>
                <a href={ recipe.link } target='_blank' rel="noopener noreferrer" >Find mere {recipe.link}</a>
                    <button onClick = { ()=> fetchRecipes( )}className='w-40 btn btn-neutral'> Find mere Recipes!</button>
              

                {/* You can add more details like recipe.image, recipe.instructions, etc. */}
            </div>
        ))}
    </div>
)}

    </div>
  )
}

export default Spoonacular

import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Link } from 'react-router-dom';
import { Input } from 'postcss';

const Spoonacular = () => {

    const { data, isLoading, error, makeRequest }   = useRequestData()


    useEffect(()=>{
        fetchRecipes()
    }, [ ])

    
    const fetchRecipes = ()=> {
        makeRequest("https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian&apiKey=" + import.meta.env.VITE_APP_SPOONACULARAPIKEY)
    }

  return (
    <div>
           <h1 className='mb-6 text-3xl font-bold text-center'>Explore Delicious Vegetarian Recipes</h1>
     

            { isLoading && <Loader/>}

            { error && <h2>Error ...</h2>}
 
        
            { data && data.recipes && (

            <div>
            {data.recipes.map(recipe => (
           <div key={recipe.id}>
           <h2>{recipe.title}</h2>
           <img src={recipe.image} alt={`Recipe for ${recipe.title}`} />
           <form type = "text" placeholder='Search for recipes'>
            <button onClick={fetchRecipes} className='w-40 btn btn-neutral'> Discover New Recipes!</button>
            </form>

           <a href={recipe.sourceUrl} target='_blank' rel='noopener noreferrer'> Explore the Full Recipe</a>
           
       
       </div>
        ))}
    </div>
)}

    </div>
  )
}

export default Spoonacular

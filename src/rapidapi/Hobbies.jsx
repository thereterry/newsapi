import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import useRequestData from "../hooks/useRequestData";
import Error from '../components/Error'

const Hobbies = () => {

    const { makeRequest, isLoading, data, error } = useRequestData()


    useEffect(()=>{
    getNewHobby()
}, [])

   const getNewHobby = ()=> {
    makeRequest ('https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies', "GET", null, {
            'X-RapidAPI-Key': '60e71efc7fmsh9912c80f25a454ap11db6ajsnaa223e1cf282',
            'X-RapidAPI-Host': 'hobbies-by-api-ninjas.p.rapidapi.com'
        })
    }


  return (
    <div>
              <h1>Nyheder - Fod dig dog en hobby</h1>
              { isLoading && <Loader/> }
            { error && <Error/> }

            {
                data && 
                <div className='card items-center'>
                    <h2 className='mb-6 text-3xl font-bold text-center'>{ data.hobby }</h2>
                    <a href={ data.link } target='_blank'>Læs mere {data.hobby}</a>
                    <button onClick = { ()=> getNewHobby( )}className='w-40 btn btn-neutral'>Nej tak - giv mig en anden hobby!</button>
                </div>
            }

    </div>
  )
}

export default Hobbies

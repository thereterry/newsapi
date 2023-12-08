import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import useRequestData from "../hooks/useRequestData";
import Error from '../components/Error'

const Facts = () => {

    const { makeRequest, isLoading, data, error } = useRequestData()


    useEffect(()=>{
    fetchFacts()
}, [])

   const fetchFacts = ()=> {
    makeRequest ('https://facts-by-api-ninjas.p.rapidapi.com/v1/facts', "GET", null, {
            'X-RapidAPI-Key': '60e71efc7fmsh9912c80f25a454ap11db6ajsnaa223e1cf282',
            'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com'
        })
    }


  return (
    <div>
              <h1>Om Facts</h1>
              { isLoading && <Loader/> }
              { error && <Error/> }

            {
                data && 
                <div className='card items-center'>
                    <h2 className='mb-6 text-3xl font-bold text-center'>{ data[0].fact}</h2>
                    <a href={ data.link } target='_blank' rel="noopener noreferrer" >Læs mere {data.link}</a>
                    <button onClick = { ()=> fetchFacts( )}className='w-40 btn btn-neutral'> Læse mere om Facts!</button>
                </div>
            }

    </div>
  )
}

export default Facts

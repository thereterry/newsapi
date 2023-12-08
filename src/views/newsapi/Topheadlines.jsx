
import React, { useEffect, useState } from 'react'

import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import newsRequestParameters from './newsapi_requestparameters.json'

//data-fns (beregner "fra nu" husk npm i date-fns)
import { formatDistanceToNow } from 'date-fns';
import { da } from 'date-fns/locale'


const TopHeadlines = () => {

const { makeRequest, isLoading, data, error } = useRequestData()

// State til at rumme der skal søges efter i nyhederne
const [  searchKey, setSearchKey ] = useState ("business")

// State til Language

const [ country, setCountry ] = useState( "us" )
const [ category, setCategory ] = useState( "" )




useEffect(()=> {

    makeRequest("https://newsapi.org/v2/top-headlines?country="+ country + "&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY + "&category=" + category , "GET")
   

}, [ country, category ])     //Når der er ændringer

useEffect (()=> {
    handleSearch()
}, [country])

const handleSearchKeyUp = (e)=> {
    if(e.key === 'Enter' ||  e.code === 'Enter') {
        handleSearch()
    }

}


    //Når der er submit på form/søgning

    const handleSearch = e => {

        // e.preventDefault()
        makeRequest( "https://newsapi.org/v2/top-headlines?country=" + country + "&pageSize=50&q=" + searchKey
        + "&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY, "GET" )

    }

  return (

    <div>
        <h1>Nyheder - "TopHeadlines</h1>
        
        { isLoading && <Loader/> }
        { error && <Error/> }



        { /** SØGNING
         * CAN USE ALSO OnKeyDown INSTEAD OnChange*/ }

{/*   
            <input type = "search" 
            onChange = { ( e ) => setSearchKey( e.target.value ) } 
            value = { searchKey }
             placeholder= "Søg noget" 
            className='input-border'/> */}


        <select onChange = { e => setCountry( e.target.value)} value = { country }>
          {
            newsRequestParameters.country.map(p=> 
                <option value={p.code}>{p.country_code}</option> 
            )
          }
        </select>

        <select onChange = { e => setCategory( e.target.value)} value = { category }>
          {
            newsRequestParameters.category.map(p=> 
                <option value={p.code}>{p.category_code}</option> 
            )
          }
        </select>
       

        { /** SØGRESULTAT -Response fra API*/ }
    
        <div className='grid'>

                {
                    data && data.articles.map( n => (
                        <div className='card' key={ n.url }>
                                <figure>
                                    <img src={ n.urlToImage} alt= "" />
                                </figure>

                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h2>{n.title}</h2>
                                    </div>
                                    <p>
                                        { new Date(n.publishedAt).toLocaleString("da-dk", { year: "numeric", month: "long", day: "numeric", hour: "numeric" }) }
                                    </p>
                                    { /** FORMAT DISTANCE TO NOW - Se imports */ }
                                    <p>{formatDistanceToNow(new Date( n.publishedAt), { locale: da, addSuffix: true })}
                                    </p>
                            
                                    <h3>{n.description}</h3>
                                    {n.content}
                                    <p>
                                        <a href={ n.url} target='_blank' rel='noreferrer'>Læs mere</a>
                                    </p>
                                </div>
                        </div>
                    ))
                }
        </div>
    </div>
       ) 
  

}

export default TopHeadlines

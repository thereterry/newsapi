import React, { useEffect, useState } from 'react'

import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import newsRequestParameters from './newsapi_requestparameters.json'

//data-fns (beregner "fra nu" husk npm i date-fns)
import { formatDistanceToNow } from 'date-fns';
import { da } from 'date-fns/locale'


const Everything = () => {

const { makeRequest, isLoading, data, error } = useRequestData()

// State til at rumme der skal søges efter i nyhederne
const [  searchKey, setSearchKey ] = useState ("ai")

// State til Language

const [ language, setLanguage ] = useState( "de" )

 // Languaga Options




useEffect(()=> {

    makeRequest( "https://newsapi.org/v2/everything?q=" + searchKey + "&pageSize=50&language" + language  + 
    "&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY, "GET" )

    // makeRequest( "https://newsapi.org/v2/everything?q=ai&pageSize=50&language=en&apiKey=e12d1ab2796144d58bde63fcc3b5c705", "GET")

}, [ language ])     //Når der er ændringer

// useEffect (()=> {
//    handleSearch()
// }, [language])

const handleSearchKeyUp = (e)=> {
    if(e.key === 'Enter' ||  e.code === 'Enter') {
        handleSearch()
    }

}


    //Når der er submit på form/søgning

    const handleSearch = e => {

        // e.preventDefault()
        makeRequest( "https://newsapi.org/v2/everything?q=" + searchKey + "&pageSize=50&language=" + language + 
        + "&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY, "GET" )

    }

  return (

    <div>
        <h1>Nyheder - "Everything"</h1>
        
        { isLoading && <Loader/> }
        { error && <Error/> }



        { /** SØGNING
         * CAN USE ALSO OnKeyDown INSTEAD OnChange*/ }

  
            <input type = "search" 
            onChange = { ( e ) => setSearchKey( e.target.value ) } 
            value = { searchKey }
             placeholder= "Søg noget" 
            className='input-border'
            onKeyUp={handleSearchKeyUp}
            />

              {/* Language Dropdown */}
            <select onChange = { e => setLanguage( e.target.value)} value = { language }>
          {
            newsRequestParameters.language.map( lang=> {
                <option key={lang.code} value={lang.code}>{lang.language}</option>
            }) }
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

export default Everything

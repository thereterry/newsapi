
import React, { useEffect, useState } from 'react'

import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';
import WeatherCard from './WeatherCard';
// import postnrJSON from './postnumre.json'



const Weather3 = () => {

  const { makeRequest, isLoading, data, error}   = useRequestData()
  
  //Når DELETE kaldes bør vi bruge en anden, så DELETE-data holdes her
  const { makeRequest: makeRequestDAWA, isLoading: isLoadingDAWA, data: dataDAWA, error: errorDAWA } = useRequestData()



  //State til postnummer fra inputfeltet
  const [ zip, setZip ] = useState( "4000" )
  //Til at holde øje med om input-feltet rummer valide data/input
  const [ valid, setValid ] = useState( true )

useEffect (()=> {
  if ( valid === true ) {
    makeRequest( "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",dk&units=metric&appid=5311ce785dd3de9b291799095104c1bf")
  }
}, [ zip ])


useEffect(()=> {
  makeRequestDAWA( "https://api.dataforsyningen.dk/postnumre/autocomplete?q= " +  zip )
}, [zip])


  return (
    <div>
        <h1 className='mb-6 text-3xl font-bold text-center'>Vejret for en udvalgt by- med data fra DAWA</h1>

        { isLoading && <Loader/>}

        { error && <h2>Error ...</h2>}

        <input type= "text" list='listPostnr'
     
          value= { zip }
          maxLength= "4"
          onChange = { e => { setZip( e.target.value ); setValid(e.target.checkValidity()) } }
          //checkValidity() tjekker disse to -og returnerer true eller false
          required 
          pattern = "[0-9]{4}"
          placeholder = "tast et postnummer"
          className = "w-full mx-w-xs input input-bordered" />

          <datalist id = "listPostnr">

            {/* {
              postnrJSON.map(p=> 
              <option value={ p.postnr } key={ p.postnr }>
                {p.postnr} {p.postnr} {p.by}
                </option> )
            }
            {/* <option value= "8000">8000 Århus</option>
            <option value= "8500"> 8500 Grenå</option>
            <option value= "8400"> 8400 Ebeltoft</option>
            <option value= "8200"> 8200 Århus N</option> */}

          </datalist> 


          {  data && 

          <WeatherCard data = { data } />
          // <article className='w-1/2 mt-shadow-xl card bg-base-100'>
          //   <div className='card-body'>
          //     <h2 className='my-4 text-2xl font-bold'>Vejret for { data.name }</h2>
          //     <figure>
          //       <img src='{ "https://openweather.org/img/img/wn/" + data.weather [ 0 ].icon + "png" }' />
          //     </figure>
          //     <ul className='ml-5 list-disc divide-y divide-gray-200'>
          //       <li className='py-4'>Temperature: { Math.round( data.main.temp )} &deg;C</li>
          //       <li className='py-4'>Vindhastighed: { Math.round( data.wind.speed )} m/sek</li>
          //       <li className='py-4'>Vindretning: { data.wind.deg } 
          //         <FaArrowDownLong style= { { transform: "rotate(" + data.wind.deg + "deg)" } } />   
          //       </li>
          //       <li className='py-4'>Solen står op kl. { new Date( data.sys.sunrise * 1000 ).toLocaleString( [], { hour:"2-digit" } ) }</li>
                
          //     </ul>
          //   </div>
          // </article>
          
          }
          
          
    </div>
  )
}

export default Weather3

import React, { useEffect, useState } from 'react'
// import { FarrowDownLong } from "react-icons/fa6";
import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';
import WeatherCard from './WeatherCard'






const Weather1 = () => {

  const { data, isLoading, error, makeRequest }   = useRequestData()

  const [ zip, setZip ] = useState( "4000" )
  const [ valid, setValid ] = useState( true )

useEffect (()=> {
  if ( valid === true ) {
    makeRequest ( "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",dk&units=metric&appid=5311ce785dd3de9b291799095104c1bf")
  }
}, [ zip ])


  return (
    <div>
        <h1 className='mb-6 text-3xl font-bold text-center'>Vejret for en udvalgt by</h1>

        { isLoading && <Loader/>}

        { error && <h2>Error ...</h2>}

        <input type= "text"
        
          value= { zip }
          maxLength= "4"
          onChange = { e => { setZip( e.target.value ); setValid( e.target.checkValidity()) } }
          //checkValidity() tjekker disse to -og returnerer true eller false
          required = "[0-9]{4}"
          pattern = "[0-9]{4}"
          placeholder = "tast et postnummer"
          classname = "w-full mx-w-xs input input-bordered" />


          {  data && <WeatherCard data = { data } />
          // <article className='¨w-1/2 mt-shadow-xl card bg-base-100'>
          //   <div className='card-body'>
          //     <h2 className='my-4 text-2xl font-bold'>Vejret for  { data.name }</h2>
          //     <figure>
          //       <img src='{ "https://openweather.org/img/img/wn/" + data.weather [ 0 ].icon + "png" }' />
          //     </figure>
          //     <ul className='ml-5 list-disc divide-y divide-gray-200'>
          //       <li className='py-4'>Temperature: { Math.round( data.main.temp )} &deg;C</li>
          //       <li className='py-4'>Vindhastighed: { Math.round( data.wind.speed )} m/sek</li>
          //       <li className='py-4'>Vindretning: { data.wind.deg } 
          //         <FaArrowDownLong style= { { transform: "rotate(" + data.wind.deg + "deg)" } } />   
          //       </li>
          //       <li className='py-4'>Solen går ned kl. { new Date( data.sys.sunrise * 1000 ).toLocaleString( [], { hour:"2-digit" } ) }</li>
          //     </ul>
          //   </div>
          // </article>
          
          }
          
          
     

        {/*  Udtræk vejret her og vis fx temperatur, vindhastigheds */}
    </div>
  )
}

export default Weather1

import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';
import WeatherCard from './WeatherCard';
import postnrJSON from './postnumre.json'

 
const Weather2 = () => {

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
        <h1 className='mb-6 text-3xl font-bold text-center'>Vejret for en udvalgt by- med datalist </h1>

        { isLoading && <Loader/>}

        { error && <h2>Error ...</h2>}

        { /* INPUT TIL POSTNR */ }
        <input type= "text" list='listPostnr'
    
          value= { zip }
          pattern="[0-9]{ 4 }"
          maxLength= "4"
          onChange = { e => { setZip( e.target.value ); setValid(e.target.checkValidity()) } }
          //checkValidity() tjekker disse to -og returnerer true eller false
          required = "[0-9]{4}"
          placeholder = "tast et postnummer"
          classname = "w-full mx-w-xs input input-bordered" />

{        /* DATALIST med postnummer/btý til datalist/dropdown til inputfeltet*/ }
           <datalist id = "listPostnr">
            {
              postnrJSON.map( p=>
                <option value={ p.postnr } key={ p.postnr }>
                  { p.postnr } { p.by }
                  </option>
                 )
            } 
            {/* <option value= "8000">8000 Århus</option>
            <option value= "8500"> 8500 Grenå</option>
            <option value= "8400"> 8400 Ebeltoft</option>
            <option value= "8200"> 8200 Århus N</option> */}

           </datalist> 


          {  data &&  <WeatherCard data = { data }/> }
          
          
     

        {/*  Udtræk vejret her og vis fx temperatur, vindhastigheds */}
    </div>
  )
}

export default Weather2

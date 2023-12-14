import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';
import WeatherCard from './WeatherCard';
import LeafletMap from '../components/LeafletMap'





const Weather4 = () => {

  const { data, dataDAWA, isLoading, error, makeRequest }   = useRequestData()

  const [ zip, setZip ] = useState( "5000" )
  const [ valid, setValid ] = useState( true )

useEffect (()=> {
  if ( valid === true) {
    makeRequest ( "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",dk&units=metric&appid=5311ce785dd3de9b291799095104c1bf")
  }
}, [ zip ])


  return (
    <div>
        <h1 className='mb-6 text-3xl font-bold text-center'>Vejret for en udvalgt by- med data fra DAWA og Leaflet-map</h1>

        { isLoading && <Loader/>}

        { error && <h2>Error ...</h2>}

        <input type= "text"
        
          value= { zip }
          onChange = { e => setZip ( e.target.value ) }
          required = "[0-9]{4}"
          pattern = "[A-Za-z]{13}"
          placeholder = "tast et postnummer"
          classname = "w-full mx-w-xs input input-bordered" />

          {/*DATALIST merd postnummer/by til datalist dropdown til inputfelter */}
          <datalist>
            {
              dataDAWA?.map(d=>
                <option value={ d.postnummer.nr } key={ d.postnummer.nr }>
                  { d.tekst }
                </option>
                )
            }
          </datalist>


          <div className='grid grid-cols-2 col-auto gap-5 sm:grid-cols-2 md:grid-cols-3'>
          {
            data && <WeatherCard data= { data } />
          } 
          {
            data &&  <LeafletMap coord = { [ data.coord.lat, data.coord.lon] }  info = { data.weather [ 0 ].description } 
            zoom= "10"
            />
          } 
          </div>
       
    </div>
  )
}

export default Weather4

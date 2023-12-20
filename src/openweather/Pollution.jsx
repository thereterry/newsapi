import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';
import LeafletMap from '../components/LeafletMap'

const Pollution = () => {

    const {  makeRequest, isLoading, data, error }   = useRequestData()

    const [lat, setLat]=useState(57)
    const [ lon, setLon ] = useState(10)

    useEffect(()=> {
        makeRequest("http://api.openweathermap.org/data/2.5/air_pollution?lat=" + lat + "&lon=" + lon + 
        "&appid=5311ce785dd3de9b291799095104c1bf")
    }, [ lat, lon ])

  return (
    <div>
      <h1 className='mb-6 text-3xl font-bold text-center'>Pollution/Forurening ud fra klik/koordinater på Leaflet Map</h1>
      <h2 className='text-2xl'> Pollution data</h2>

      { data &&
        <ul>
            <li>co:{data.list[ 0 ].components.co}</li>
            <li>no:{data.list[ 0 ].components.no}</li>
            <li>no<sub>2</sub>:
                {data.list[ 0 ].components.no2}</li>
         </ul>
      }

      <LeafletMap coord = { [ lat,lon ] }  
       // set kortets koordinator
       zoom="15" 
        info = "Nu er der popup med denne tekst" 
       setLat={setLat} //manipulerer med pollution lat-state(ved klip map)
       setLon={ setLon } //manipulerer med pollution lon-state(ved klik på map)
       />
    </div>
  )
}

export default Pollution

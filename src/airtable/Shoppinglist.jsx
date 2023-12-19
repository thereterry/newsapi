import React, { useEffect } from 'react'
import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { FaTrash } from "react-icons/fa";


const Shoppinglist = () => {
    const { data, isLoading, error, makeRequest }   = useRequestData();

    // const [ item, setItems ] = useState()
    



    useEffect(()=> {
        makeRequest ("https://api.airtable.com/v0/appIIM18qHBo33b9k/Table%201", 
        "GET", null,
         {
            'Authorization' : "Bearer " + import.meta.env.VITE_APP_AIRTABLEKEY
        })

    },[])


    return (
        <div>
    
          <h1 className='mb-6 text-3xl font-bold text-center'>Husk at købe!</h1>
     
    
    
          {isLoading && <Loader />}
    
          {error && <h2>Error... </h2>}

          { data && data.records.map( p => 
            <div className='card' key={p.id}>
                <p>{p.fields.Note}</p>
                <p> Created: { new Date(p.createdTime). toLocaleString ("da-DK", { year:"2-digit", month:"long", day: "numeric", hour: "2-digit", minute: "2-digit" }) }</p>
                <p>{p.fields.Item}</p>
                <button onClick={() => handleDelete(p.id, p.title)}>
                      <FaTrash size="2em" color="darkred" className="cursor-pointer"/>
                </button>
    

            </div>
           )
          }
    
         
        </div>
    
    
    
      )

 
}

export default Shoppinglist

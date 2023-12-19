import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { FaTrash } from "react-icons/fa";


const Shoppinglist = () => {
    const { data, isLoading, error, makeRequest }   = useRequestData();

    const [ image, setImage ] = useState()

    const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData();
   

        useEffect(() => {
          
          makeRequest("https://api.airtable.com/v0/appIIM18qHBo33b9k/Table%201",  
        "GET", null,
         {
            'Authorization' : "Bearer " + import.meta.env.VITE_APP_AIRTABLESHOPPINGTOKEN
        })

       
        }, [ dataDelete ])
        
      
    

     const handleDelete = ( postID, postTitle ) => {

         if ( window.confirm ("Er du sikker på at du vil slette:" + postTitle )) {
         
            makeRequestDelete("https://api.airtable.com/v0/appIIM18qHBo33b9k/Table%201/" + postID, "DELETE", null,
             {
             
            'Authorization' : "Bearer " + import.meta.env.VITE_APP_AIRTABLESHOPPINGTOKEN
           })
         }
       }


    

    return (

        <div>
    
          <h1 className='mb-6 text-3xl font-bold text-center'>Husk at købe!</h1>
     
    
    
          {isLoading && <Loader />}
    
          {error && <h2>Error... </h2>}

          <article  className='grid-grid-col-3 gap-3'>
            

            { data && data.records.map( p => 

                    <div 
                        className='card' key={p.id}>
                        <p> Created: { new Date(p.createdTime). toLocaleString ("da-DK", { year:"2-digit", month:"long", day: "numeric", hour: "2-digit", minute: "2-digit" }) }</p>
                        <p>{p.fields.Note}</p>
                        <input type= "text"
        
                        maxLength= "10"
                        onChange = { e => { setZip( e.target.value ); setValid( e.target.checkValidity()) } }
                        //checkValidity() tjekker disse to -og returnerer true eller false
                        placeholder = ""
                        classname = "w-full mx-w-xs input input-bordered" />

                        <h2>{data.id}</h2>
                        <p>{p.fields.Item}</p>

                        <button onClick={() => handleDelete(p.id, p.title)}>
                            <FaTrash size="2em" color="darkred" className="cursor-pointer"/>
                        </button>
                      

                        <div>


                     { 

                        p.fields.img &&
                 
                         <figure>
                            <img src={p.fields.img[0].url} alt={p.fields.Item || 'Image'} />
                         </figure> 

        
                    }

                    {/* {
                        p.fields.img  && 

                        <figure>
                                <img src={p.fields.img[0].thumbnails.small.url} alt="" />
                        </figure>
                    }  */}
                             
                        </div>
                 
                    </div>
                    )
                    }

          </article>

         
        </div>
    
    
    
      )

 
}

export default Shoppinglist

import React, { useEffect, useState } from "react";

import useRequestData from "../hooks/useRequestData";

import Loader from "../components/Loader";

import { Link } from "react-router-dom";
import PrevNext from "../components/PrevNext";
import ItemsPerPage from "../components/ItemsPerPage";


const Photos = () => {
    const { data, isLoading, error, makeRequest }   = useRequestData();

    const [itemsPerPage, setItemsPerPage] = useState(5);

    const [currentPage, setCurrentPage] = useState(0);
 

  useEffect(() => {
    makeRequest("https://jsonplaceholder.typicode.com/photos");
  }, []);

  // useEffect(()=>{
  //   if(data && data.length)
  // }, [data])





  return (

    <div>


        <h2>Json Placeholder - Photos </h2>


        {isLoading && <Loader />}

        { error && <h2> Error...</h2>}

      
      <ItemsPerPage setItemsPerPage={setItemsPerPage} setCurrentPage= { setCurrentPage} options= { [ 5, 10, 50, 200]} />
      <PrevNext setCurrentPage = { setCurrentPage} currentPage={currentPage} dataLength={ data?.length } itemsPerPage= {itemsPerPage }/>

 

         <div>

                { data && data.slice ( (currentPage * itemsPerPage), (currentPage * itemsPerPage + itemsPerPage)).map( p => 
                    
                    <div className="card" key={p.id}>
                        <h2>{p.title}</h2>
                        <img src={p.thumbnailUrl} alt="" loading="lazy" />
                        <p>{p.id}</p>
                        <Link to = {"/post/" + p.id}> Læs mere </Link>
                    </div>
                    
                 )}
        </div>

    </div>

    )
}
export default Photos

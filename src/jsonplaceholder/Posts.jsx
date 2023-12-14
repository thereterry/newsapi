import { useState, useEffect } from "react";
import useRequestData from "../hooks/useRequestData";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import ItemsPerPage from "../components/ItemsPerPage";
import PrevNext from "../components/PrevNext";






const Posts = () => {
  const { data, isLoading, error, makeRequest }   = useRequestData();

  //prev og next buttons "skift side"
  const [ itemsPerPage, setItemsPerPage] = useState(50);
  const [ currentPage, setCurrentPage] = useState(0);


  useEffect(() => {
    //funktion
    makeRequest("https://jsonplaceholder.typicode.com/posts");
  }, []);

  //Slice data aht.prev og next
  const sliceData = ( dataToSlice) =>{
    //returnerer  data slicet fx (0,20) eller (20,40)
   return dataToSlice.slice( ( currentPage * itemsPerPage ), ( currentPage * itemsPerPage + itemsPerPage ) )
  }

  

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">

      <h1 className="mb-6 text-3xl font-bold text-center">JSONPLACEholder - Posts</h1>

      { isLoading && <Loader/>}

      { error && <h2>Error ...</h2>}

      <ItemsPerPage setItemsPerPage={ setItemsPerPage } setCurrentPage={setCurrentPage} options={ [5, 10, 50, 200] } /> 

      {/* <div>
        {

          [ 5, 10, 20, 50,100 ].map(o => <button  key = {"btn" + o } className="btn" onClick={ ()=> { setItemsPerPage ( o ); setCurrentPage( 0 ) } } >{ o } pr.side</button> )

        }  
      </div> */}

    

      {
        data &&  
        <PrevNext setCurrentPage={ setCurrentPage } currentPage={ currentPage } dataLength={ data?.length } itemsPerPage={ itemsPerPage } />
        // <>
        // { /* Previous-forrige-button*/  }
        //   <button className="btn" onClick= { ()=> setCurrentPage ( currentPage -1) } disabled= { currentPage <=0  }>Prev</button>
        //  <button className="btn" onClick= { ()=> setCurrentPage ( currentPage + 1) }     disabled= { currentPage +1 >= Math.ceil(data.length / itemsPerPage) }>Next</button>    
        // </>
      }       

     {/* {   data && sliceData  ( (currentPage * itemsPerPage ), ( currentPage * itemsPerPage) ).map ( p =>  */}

        { data && sliceData(data).map(p =>
  
           <div className="shadow xl card bg-base-100" key={ p.id }>
            <div className="card-body">
            <h2 className="text-xl font-bold"> {p.title} </h2>
            <p>{ p.id }</p>                 
           <Link to = { "/post/" + p.id} className="btn">Læs mere</Link>
            </div>
    
          </div>
          ) }
      
        </div>

  )
};

export default Posts;

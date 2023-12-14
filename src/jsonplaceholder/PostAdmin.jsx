import {useEffect } from "react";

import useRequestData from "../hooks/useRequestData";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import { Alert } from "bootstrap";



const PostAdmin = () => {

  // Hent data der skal map 'es
  const { data, isLoading, error, makeRequest }   = useRequestData();

  // Når DELETE kaldes bør vi bruge en anden, så DELETE -data holdes her
  const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData();

    //GET DATA
  useEffect(() => {
    //Hent data som skal map'es ud...
    makeRequest("https://jsonplaceholder.typicode.com/posts")
  }, []);


      //DELETE DATA
  const handleDelete = ( postID, postTitle ) => {

    if ( window.confirm ("Er du sikker på at du vil slette:" + postTitle )) {
       //Det dur ikke at genbruge makerequest som også bruges til at loope alle posts ind på siden
        //...får når vi afvikler slet-request så får vi tomme tilbage, s¨det vil "slette " men componenten får en fejl!
      makeRequest("https://jsonplaceholder.typicode.com/posts/" + postID, "DELETE")
    }
  }
  

  

  return (

    <div>

      <h1 className="mb-6 text-3xl font-bold text-center">JSONPLACEholder - ADMIN Posts</h1>

      { isLoading && <Loader/>}
      
      { dataDelete && <h2>Du har netop slettet en Post!</h2> }

      { error && <h2>Error ...</h2>}


     {/* { <table>
          <thead>
            <tr>
                <td></td>
                <td></td>
                <td></td> 
                {<td> <Link to={"/postcreate" } className="btn"></Link></td> }
            </tr>
          </thead>
        </table>  
      } */}
      
      <table className="table table-zebra">
        <thead>
          <tr>
            <td>ID</td>
            <td>TITLE</td>
            <td>RET</td>
            <td>SLET</td>
            <td><Link to={"/postcreate"} className="btn">Create</Link></td>
          </tr>
        </thead>
        
        <tbody>

          {
            data && data.map(p => 
                
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>
                  <Link to={"/postedit/" + p.id} className="btn">
                    <FaEdit size= "2em" color= "darkgreen"  />
                  </Link>
                </td>
                <td>
                    <button onClick={() => handleDelete(p.id, p.title)}>
                      <FaTrash size="2em" color="darkred" className="cursor-pointer"/>
                    </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )

 }
 
export default PostAdmin;
        
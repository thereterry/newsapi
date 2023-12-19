import {useEffect} from 'react'

import useRequestData from "../hooks/useRequestData";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";


const ShoppinglistAdmin = () => {

    const { data, isLoading, error, makeRequest }   = useRequestData();

    const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData();

    useEffect(() => {
        //Hent data som skal map'es ud...
        makeRequest("https://api.airtable.com/v0/appIIM18qHBo33b9k/Table%201recyg5LfZ3Fzvjl9W", "DELETE", null,

        {
            'Authorization' : "Bearer " + import.meta.env.VITE_APP_AIRTABLEKEY
        }
)
      }, []);

      const handleDelete = ( postID, postTitle ) => {

        if ( window.confirm ("Er du sikker på at du vil slette:" + postTitle )) {
           //Det dur ikke at genbruge makerequest som også bruges til at loope alle posts ind på siden
            //...får når vi afvikler slet-request så får vi tomme tilbage, s¨det vil "slette " men componenten får en fejl!
          makeRequest("https://api.airtable.com/v0/appIIM18qHBo33b9k/Table%201" + postID, "DELETE")
        }
      }
    
  return (
    <div>
      
    </div>
  )
}

export default ShoppinglistAdmin

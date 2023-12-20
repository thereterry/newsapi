import {useEffect, useState} from 'react'
import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Error from '../components/Error'

const ToDosAirtable = () => {

    const { data, isLoading, error, makeRequest }   = useRequestData();

    const [newItem, setItem] = useState()

    const [ deleteItemId, setDeleteItemId] = useState(null);

       // GET Request
    useEffect(() => {
    
        makeRequest("https://api.airtable.com/v0/appCdbcYbNuwiuTqM/ToDo%20Category/recL4xL3FnBXhYIEW",   "GET", null,
        {
            'Authorization' : "Bearer " + import.meta.env.VITE_APP_AIRTABLESHOPPINGTOKEN  
        })

    }, [])

        // POST Request
    
        useEffect(()=> {
            if (newItem) {
                if (newItem) {
                    makeRequest(`https://api.airtable.com/v0/appCdbcYbNuwiuTqM/ToDo%20Category`, 
                        "POST", 
                        JSON.stringify({ fields: updateItem.fields }), 
                        {
                            'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLESHOPPINGTOKEN,
                            'Content-Type': 'application/json'
                        }
                    )
                    .then(response => {
                        // Handle response here
                        console.log('Record created successfully:', response);
                    })
                    .catch(error => {
                        // Handle error here
                        console.error('Failed to create record:', error);
                    });

                }  
            }
        }, [newItem]);

          // DELETE Request
    useEffect(() => {
        if (deleteItemId) {
            const url = `https://api.airtable.com/v0/appCdbcYbNuwiuTqM/ToDo%20Category/recL4xL3FnBXhYIEW`;
            const headers = {
                'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLESHOPPINGTOKEN
            };

            makeRequest(url, "DELETE", null, headers);
        }
    }, [deleteItemId]);
   

    return (
        <div>
                <h1 className='mb-6 text-3xl font-bold text-center'>ToDos Airtable</h1>

        </div>
    )
    
}

export default ToDosAirtable

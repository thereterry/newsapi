import {useEffect} from 'react'
import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Error from '../components/Error'

const ToDosAirtable = () => {

    const { data, isLoading, error, makeRequest }   = useRequestData();

    useEffect(() => {
    
        makeRequest("https://api.airtable.com/v0/appCdbcYbNuwiuTqM/ToDo%20Category?maxRecords=3&view=Grid%20view",   "GET", null,
        {
            'Authorization' : "Bearer " + import.meta.env.VITE_APP_AIRTABLESHOPPINGTOKEN  
        })

    }, [  ])

    return (
        <div>
                <h1 className='mb-6 text-3xl font-bold text-center'>ToDo Airtable</h1>

        </div>
    )
    
}

export default ToDosAirtable

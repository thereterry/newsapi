import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Error from '../components/Error'

const PostEdit = () => {

    //Hent ID på post der skal retters - fra url's

    const { postID } = useParams()

    const { data, isLoading, error, makeRequest } = useRequestData()  //GET
    const { data: dataPUT, isLoading: isLoadingPUT , error: errorPUT, makeRequest: makeRequestPUT } = useRequestData()  //PUT

    //state til at ramme en post ( som skal slettes )
    const [ title, setTitle ] = useState( "")
    const [ body, setBody ] = useState( "")
    const [ userId, setUserID ] = useState( "")

    //Hent data som skal map'es ud...

    useEffect(()=> {
        makeRequest( "https://jsonplaceholder.typicode.com/posts/" + postID )
    }, [ ])



    //når der er hentet/GET dara fra API' et (post der skal rettes) indlæs data i state
    useEffect(()=> {

        if(data) {
            setTitle( data.title)
            setBody( data.body)
            setUserID( data.userId)
        }
    }, [ data ])

    const handleSubmit = e => {
        // console.log("tester")
        e.preventDefault();   //VIGTIG!! Undgå at siden genindlæs -tømmer alt i state mv.!

        const rettePost = { title, body, userId }

        makeRequestPUT( "https://jsonplaceholder.typicode.com/posts/" + postID, "PUT", rettePost ) 

    }

  return (
    <div>
      <h1>JSONPlaceholder - Edit/update Post</h1>

      { error ||  errorPUT && <Error/>}

      { isLoading ||  isLoadingPUT && <Loader/> }

      {
        dataPUT &&
        <div className='card-body'>
            <h2>Post er rettet: </h2> 
            <p>Title: {dataPUT.title}</p>
            <p>Body: {dataPUT.body}</p>
            <p>UserID: {dataPUT.userId}</p>
        </div>
      }
            {
                data && <h2>Ny er oprettet- den fik ID : { data.id }</h2>
            } 

            <form className='form-control' onSubmit={ handleSubmit }>

                <label htmlFor='inputTitle'>Title</label>
                <input id="inputTitle" 
                type="text" 
                onInput= { e => setTitle( e.target.value ) }
                value={ title }
                required placeholder='Titel' 
                className='input'
                
                />

                <label>Body</label>
                <textarea id = "txBody" 
                value={ body }
                required placeholder='body' 
                className='textarea'>

                </textarea>

                <label>Id på user</label>
               <input id = "txtUser" 
               value={ userId }
               type="number"
                placeholder='User Id' 
                className='number' />

               <button type='submit' className='btn_submit'> Ret Post</button>
            </form>

    </div>
  )

  return { data, isLoading, error, makeRequest };
 
}

export default PostEdit

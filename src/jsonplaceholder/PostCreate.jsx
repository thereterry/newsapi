import React, { useState } from 'react'
import useRequestData from '../hooks/useRequestData'

const PostCreate = () => {

    const { data, isLoading, error, makeRequest } = useRequestData()

    const [ title, setTitle ] = useState("")
    const [ body, setBody ] = useState("")
    const [ userId, setUserID ] = useState("")

//Der er klikket på submitbutton -send data til API
    const handleSubmit = e => {
        console.log("tester")
        e.preventDefault();   //VIGTIG

        const nyPost = { title, body, userId }

        makeRequest( "https://jsonplaceholder.typicode.com/posts" , "POST", nyPost)

    }

  return (
    <div>
            <h1>JSONPLACEholder - Create-Posts</h1>
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

               <button type='submit' className='btn_submit'>Opret Ny Post</button>
            </form>

    </div>
  )

  return { data, isLoading, error, makeRequest };
}

export default PostCreate

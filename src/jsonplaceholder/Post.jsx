import { useEffect, useState } from 'react'

import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { useParams, Link } from 'react-router-dom'
import Posts from './Posts'



 
const Post = () => {

  const { data, isLoading, error, makeRequest }   = useRequestData();

  const { postID } = useParams()
 
    useEffect(() => {
        // hent post med ID sendt med som params ELLER || post med ID 3 (hivs ikke params er der)
        makeRequest("https://jsonplaceholder.typicode.com/posts/" + (postID || 3))
     //postID // 3
    }, [])
   
  return (
    <div>

      <h1 className='mb-6 text-3xl font-bold text-center'>JSON Placeholder -Vis udvalgt POST</h1>
      <h2>{postID}</h2>


      {isLoading && <Loader />}

      {error && <h2>Error... </h2>}

      { data &&

        <div className='card' key = {data.id}>
           <h2 className='text-xl font-bold'>{data.title}</h2>
          {<p>{data.body}</p>}
          <p>{data.id}</p>
        </div>

      }

      <Link to="/posts" className="btn"> &lt;&lt; Tilbage til alle Posts &reg; &copy;</Link>
   
     
    </div>



  )
}
export default Post
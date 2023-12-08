import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './App.css'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/Login'
import NoMatch from './views/NoMatch'
import Layout from './layout/Layout'
import LayoutAdmin from './Layout/ADMIN/LayoutAdmin'
import HomeAdmin from './views/ADMIN/HomeAdmin'
import News from './views/News';
import Posts from './jsonplaceholder/Posts';
import Post from './jsonplaceholder/Post';
import Photos from './jsonplaceholder/Photos';
import Todos from './jsonplaceholder/Todos';
import Starships from './swapi/Starships';
import PostAdmin from './jsonplaceholder/PostAdmin';
import PostCreate from './jsonplaceholder/PostCreate';
import PostEdit from './jsonplaceholder/PostEdit';
import Everything from './views/newsapi/Everything';
import TopHeadlines from './views/newsapi/Topheadlines';
import Facts from './rapidapi/Facts';
import Hobbies from './rapidapi/Hobbies';
import LoveCalculator from './rapidapi/LoveCalculator'






function App () {

  // ROUTER PROVIDER
  const router = createBrowserRouter(

    createRoutesFromElements(
      <>
        {/* ---------------- PUBLIC ---------------- */ }
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="contact" element={ <Contact /> } />
          <Route path="news" element={ <News /> } />
          <Route path="login" element={ <Login /> } />
          
            {/*NEWSAPI*/}
          <Route path="newseverything" element={ <Everything /> } />
          <Route path="topheadlines" element={ <TopHeadlines /> } />

               {/*RAPIDAPI*/}
          <Route path="facts" element={ <Facts/> } />
          <Route path="hobbies" element={ <Hobbies /> } />
          <Route path="lovecalculator" element={ <LoveCalculator /> } />
      



          {/*JSONPLACEholder */}
          { <Route path="starships" element={ <Starships/> } /> }
          {/*JSONPLACEholder */}
          <Route path="posts" element={ <Posts/> } />
          <Route path="post/:postID" element={ <Post/> } />
          <Route path="post" element={ <Post/> } />
          <Route path="postadmin" element={ <PostAdmin/> } />
          <Route path="postcreate" element={ <PostCreate/> } />
          <Route path="/postedit/:postID" element={ <PostEdit/> } />
          { <Route path="photos" element={ <Photos/> } /> }
          { <Route path="todos" element={ <Todos/> } /> }
     
          <Route path="*" element={ <NoMatch /> } />
        </Route>

        {/* ---------------- ADMIN ---------------- */ }
        <Route path="/admin" element={ <LayoutAdmin /> }>
          <Route index element={ <HomeAdmin /> } />
          <Route path="*" element={ <NoMatch /> } />
        </Route>
      </>
    )
  )

  return (
    <section>
      <RouterProvider router={ router } />
      {/* <h1>Forsiden</h1> */ }
    </section>


  )
}

export default App

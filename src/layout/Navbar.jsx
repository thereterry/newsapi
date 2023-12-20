import React from "react";
import { NavLink } from "react-router-dom";




const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#">LOGO A/S</a>
        </div>

        <div className="nav-links">


          {/* <div className= { `md:flex md:items-center md:items-center md:spcae-x-4 ${ showMenu ? 'block' : 'hidden' }` }>   </div> */}
          <NavLink to="/"  className="hover:text-gray-200">Home</NavLink>
          <NavLink to="/about"  className="hover:text-gray-200">Om os</NavLink>
          <NavLink to="/news" className="hover:text-gray-200">Nyheder</NavLink>
          <NavLink to="/contact" className="hover:text-gray-200">Kontakt</NavLink>

        <div>
          <li>
            <details>
              <summary>NewsAPI</summary>
              <ul className="z-50 p-2">
                <li>
                <NavLink to="/newseverything"  className="hover:text-gray-200">Everything</NavLink>
                </li>
                <li>
                <NavLink to="/topheadlines"  className="hover:text-gray-200">TopHeadlines</NavLink>
                </li>
              </ul>
            </details>
          </li>
        </div>
      
        <div>
          <li>
            <details>
              <summary>RapidAPI</summary>
              <ul className="z-50 p-2">
                <li>
                <NavLink to="/facts"  className="hover:text-gray-200">Grib en fact!</NavLink>
                </li>
                <li>         
                <NavLink to="/hobbies"  className="hover:text-gray-200">Hobbies</NavLink>
                </li>
                <li>
                <NavLink to="/lovecalculator"  className="hover:text-gray-200">LoveCalculator</NavLink>
                </li>
              </ul>
            </details>
          </li>
        </div>      

        
        <div>
            <li>
              <details>
                <summary>SWAPI</summary>
                  <ul>
                    <li>
                    <NavLink to="/starships" className="hover:text-gray-200">Starships</NavLink>
                    </li>
                  </ul>
              </details>
            </li>
          </div>

          <div>
            
          </div>
      

  
       
          <NavLink to="/spoonacular"  className="hover:text-gray-200">Spoonacular</NavLink>

        <div>
          <li>
            <details>
              <summary>OpenWeather</summary>
              <ul className="z-50 p-2">
                <li>
                  <NavLink to="/weather1"  className="hover:text-gray-200">CurrentWeather m/input</NavLink>
                </li>
                <li>
                <NavLink to="/weather2"  className="hover:text-gray-200">CurrentWeather m/input og datalist </NavLink>
                </li>
                <li>
                <NavLink to="/weather3"  className="hover:text-gray-200">CurrentWeather m/input og DAWA- datalist </NavLink>
                </li>
                <li>
                <NavLink to="/weather4"  className="hover:text-gray-200">CurrentWeather m/input og DAWA- datalist og map </NavLink>
                <NavLink to="/pollution"  className="hover:text-gray-200">Pollution/forurening ud fra koordinater </NavLink>
                </li> 
              </ul>
            </details>
          </li>
        </div>



        <div>
          <li>
            <details>
              <summary>JSONPlaceholder</summary>
            <ul className="z-50 p-2">
              <li>
              <NavLink to="/todos" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">Todos</NavLink>
              </li>
              <li>
              <NavLink to="/photos" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">Photos</NavLink>
              </li>
              <li>
              <NavLink to="/posts" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">Posts</NavLink>
              </li>
              <li>
              <NavLink to="/post/1" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">Post</NavLink>
              </li>
              <li>
              <NavLink to="/postadmin" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">PostAdmin</NavLink>
              </li>
              <li>
              <NavLink to="/postcreate" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">PostCreate</NavLink>
              </li>
              <li>
              <NavLink to="/postedit/:postID" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">PostEdit</NavLink>
              </li>
            </ul>
            </details>
          </li>
        </div>

      


          <div>
            <li>
              <details>
                <summary>Airtable</summary>
                  <ul>
                    <li>
                    <NavLink to="/airtable1" className="hover:text-gray-200">Shoppinglist</NavLink>
                    </li>
                    <li>
                    <NavLink to="/airtable2" className="hover:text-gray-200">Todos Airtable</NavLink>
                    </li>
                 
                  </ul>
              </details>
            </li>
          </div>

         

       
          <div>
            <NavLink to="/login" className= "hover:text-gray-200">Login</NavLink>
          </div>
          <NavLink to="/admin"  className="hover:text-gray-200">ADMIN</NavLink>
        </div>
      </div>

      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </nav>
  );
};

export default Navbar;

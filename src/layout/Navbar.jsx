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

        
      
          <NavLink to="/newseverything"  className="hover:text-gray-200">Everything</NavLink>
          <NavLink to="/topheadlines"  className="hover:text-gray-200">TopHeadlines</NavLink>
          <NavLink to="/facts"  className="hover:text-gray-200">Grib en fact!</NavLink>
          <NavLink to="/hobbies"  className="hover:text-gray-200">Hobbies</NavLink>
          <NavLink to="/lovecalculator"  className="hover:text-gray-200">LoveCalculator</NavLink>
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
                <NavLink to="/weather4"  className="hover:text-gray-200">Pollution/forurening ud fra koordinater </NavLink>
                </li> 
              </ul>
            </details>
          </li>
        </div>



        

          <div className="relative">
            <div className="hover:text-gray-200 group">
                  JSONPlaceholder
                <div className="absolute right-0 hidden w-48 overflow-hidden bg white rounded-mb shadow-lg group-hover:block">
                <NavLink to="/todos" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">Todos</NavLink>
                <NavLink to="/photos" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">Photos</NavLink>
                <NavLink to="/posts" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">Posts</NavLink>
                <NavLink to="/post/1" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">Post</NavLink>
                <NavLink to="/postadmin" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">PostAdmin</NavLink>
                <NavLink to="/postcreate" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">PostCreate</NavLink>
                <NavLink to="/postedit/:postID" className= "block px-4 py-2 text-gray-800 hover:bg-gray-200">PostEdit</NavLink>
                </div>
            </div>
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

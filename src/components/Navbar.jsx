

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './Nav.css';

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(prev => !prev);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar  top-0  z-50 bg-[#6A2C70] shadow-md px-6 py-4">
//       <div className="max-w-7xl  mx-auto flex justify-between items-center">
//         {/* Brand Name */}
//         <h1 className="text-2xl sm:text-3xl font-bold text-[#F9ED69] tracking-wide">
//           FlavorForge 🍽️
//         </h1>

//         {/* Hamburger Icon */}
//         <div className="hamburger sm:hidden" onClick={toggleMenu}>
//           <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
//           <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
//           <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
//         </div>

//         {/* Navigation Links */}
//         <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
//           {['/', '/about', '/recipes', '/create-recipies', '/fav'].map((path, i) => {
//             const names = ['Home', 'About', 'Recipes', 'Create', 'Favourite'];
//             return (
//               <NavLink
//                 key={path}
//                 to={path}
//                 onClick={closeMenu}
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? 'active-link' : ''}`
//                 }
//               >
//                 {names[i]}
//               </NavLink>
//             );
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Sticky navbar */}
      <nav className="sticky top-0 z-50 bg-[#6A2C70] shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#F9ED69] tracking-wide">
            FlavorForge 🍽️
          </h1>

          {/* Hamburger icon - visible on small screens */}
          <div
            className="sm:hidden flex flex-col gap-1 cursor-pointer"
            onClick={toggleMenu}
          >
            <span
              className={`block h-1 w-6 bg-white rounded transition-transform ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-1 w-6 bg-white rounded transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-1 w-6 bg-white rounded transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>

          {/* Nav links */}
          <div
            className={`flex-col sm:flex-row sm:flex gap-4 absolute sm:static top-full left-0 w-full sm:w-auto bg-[#6A2C70] sm:bg-transparent transition-all duration-300 overflow-hidden ${
              menuOpen ? "max-h-60 py-2" : "max-h-0"
            } sm:max-h-full`}
          >
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-2 text-white font-medium rounded hover:bg-[#F08A5D] transition ${
                  isActive ? "bg-[#F08A5D]" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-2 text-white font-medium rounded hover:bg-[#F08A5D] transition ${
                  isActive ? "bg-[#F08A5D]" : ""
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/recipes"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-2 text-white font-medium rounded hover:bg-[#F08A5D] transition ${
                  isActive ? "bg-[#F08A5D]" : ""
                }`
              }
            >
              Recipes
            </NavLink>

            <NavLink
              to="/create-recipies"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-2 text-white font-medium rounded hover:bg-[#F08A5D] transition ${
                  isActive ? "bg-[#F08A5D]" : ""
                }`
              }
            >
              Create
            </NavLink>

            <NavLink
              to="/fav"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-2 text-white font-medium rounded hover:bg-[#F08A5D] transition ${
                  isActive ? "bg-[#F08A5D]" : ""
                }`
              }
            >
              Favourite
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

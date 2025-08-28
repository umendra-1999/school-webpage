// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <>
//        <div className="flex flex-col sm:flex-row justify-center gap-4 bg-teal-900 text-amber-50 border-4 p-4 mb-6">
//         <Link className="p-4" to="/">Home</Link>
//         <Link className="p-4" to="/about" >About-us</Link>
//         <Link className="p-4" to="/courses">Courses</Link>
//         <Link className="p-4" to="/gallery">Gallery</Link>
//         <Link className="p-4" to="/contact">Contact</Link>
//       </div>
//     </>
//   )
// }

// export default Header


import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-blue-900 text-amber-400 border-b-4 border-blue-700 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 justify-center sm:justify-start flex-grow">
          <Link className="px-4 py-2 rounded hover:bg-blue-800 transition" to="/">Home</Link>
          <Link className="px-4 py-2 rounded hover:bg-blue-800 transition" to="/about">About Us</Link>
          <Link className="px-4 py-2 rounded hover:bg-blue-800 transition" to="/courses">Courses</Link>
          <Link className="px-4 py-2 rounded hover:bg-blue-800 transition" to="/gallery">Gallery</Link>
          <Link className="px-4 py-2 rounded hover:bg-blue-800 transition" to="/contact">Contact</Link>
        </nav>

        {/* Signup Button aligned right */}
        <div className="mt-4 sm:mt-0 sm:ml-6">
          <Link
            to="/signup"
            className="inline-block bg-amber-400 text-blue-900 font-semibold px-6 py-2 rounded shadow hover:bg-amber-300 transition"
            aria-label="Sign Up"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header


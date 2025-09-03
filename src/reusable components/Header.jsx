import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    // <header className="bg-blue-900 text-amber-400 border-b-4 border-blue-700 p-4">
    //   <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        
    //     {/* Navigation Links */}
    //     <nav className="flex flex-wrap gap-4 justify-center sm:justify-start flex-grow">
    //       <Link className="px-4 py-2 rounded hover:bg-blue-800 transition" to="/">Home</Link>
    //       <Link className="px-4 py-2 rounded hover:bg-blue-800 transition" to="/about">About Us</Link>
    //       <Link className="px-4 py-2 rounded hover:bg-blue-800 transition" to="/courses">Courses</Link>
    //       <Link className="px-4 py-2 rounded hover:bg-blue-800 transition" to="/gallery">Gallery</Link>
    //       <Link className="px-4 py-2 rounded hover:bg-blue-800 transition" to="/contact">Contact</Link>
    //     </nav>

    //     {/* Signup Button aligned right */}
    //     <div className="mt-4  sm:mt-0 sm:ml-6">
    //       <Link
    //         to="/signup"
    //         className="inline-block bg-amber-400 text-blue-900 font-semibold px-6 py-2 rounded shadow hover:bg-amber-300 transition"
    //         aria-label="Sign Up"
    //       >
    //         Sign Up
    //       </Link>
    //     </div>
    //   </div>
    // </header>
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

    {/* Separate Student and Teacher Buttons */}
    <div className="flex gap-4 mt-4 sm:mt-0 sm:ml-6">
      <Link
        to="/student"
        className="inline-block bg-amber-400 text-blue-900 font-semibold px-6 py-2 rounded shadow hover:bg-amber-300 transition"
      >
        Student
      </Link>
      <Link
        to="/teacher"
        className="inline-block bg-amber-400 text-blue-900 font-semibold px-6 py-2 rounded shadow hover:bg-amber-300 transition"
      >
        Teacher
      </Link>
    </div>
  </div>
</header>

  )
}

export default Header


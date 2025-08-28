import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
       <div className="flex flex-col sm:flex-row justify-center gap-4 bg-teal-900 text-amber-50 border-4 p-4 mb-6">
        <Link className="p-4" to="/">Home</Link>
        <Link className="p-4" to="/about" >About-us</Link>
        <Link className="p-4" to="/courses">Courses</Link>
        <Link className="p-4" to="/gallery">Gallery</Link>
      </div>
    </>
  )
}

export default Header

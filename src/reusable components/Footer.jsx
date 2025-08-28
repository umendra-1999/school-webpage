import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
   <footer className="bg-black text-white border-t-4 border-black">
  <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-8">
    
    {/* Logo + Title */}
    <div className="flex items-center gap-4">
     <Link to="/"> <img
        className="w-20 h-20 rounded-full"
        src="images/cyberforenx_logo.jpeg"
        alt="Cyberforenx Logo"
      /></Link>
      <h1 className="font-bold text-red-700 text-3xl md:text-5xl">
        Cyberforenx School
      </h1>
    </div>

    {/* Cards Section */}
    <div className="flex flex-col md:flex-row gap-6">
      
      {/* Registration Office */}
      <div className="bg-blue-800 border-4 hover:scale-95 transition-transform border-blue-900 text-amber-50 text-center rounded-lg shadow-lg p-4 w-72">
        <h2 className="text-xl font-semibold mb-2">Registration Office</h2>
        <p>info@cyberforenxschool.com</p>
        <p>Tel: 9628192156</p>
      </div>

      {/* Admissions Office */}
      <div className="bg-blue-800 border-4 hover:scale-95 transition-transform border-blue-900 text-amber-50 text-center rounded-lg shadow-lg p-4 w-72">
        <h2 className="text-xl font-semibold mb-2">Admissions Office</h2>
        <p>info@cyberforenxschool.edu.in</p>
        <p>Tel: 9628192156</p>
      </div>
    </div>
  </div>

  {/* Bottom Contact Bar */}
  <div className="bg-black border-t border-black mt-6 py-4">
    <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
      <p className="bg-black text-red-900 border-2 hover:scale-95 transition-transform border-white rounded p-3 font-semibold">
        📞 Contact us: 9628192156
      </p>
      <p className="bg-black text-red-900 border-2 hover:scale-95 transition-transform border-white rounded p-3 font-semibold">
        🌐 Visit: info@cyberforenxschool.edu.in
      </p>
      <p className="bg-black text-red-900 border-2 hover:scale-95 transition-transform border-white rounded p-3 font-semibold">
        📍 Location: Lucknow, Uttar Pradesh
      </p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer

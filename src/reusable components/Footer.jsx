import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-8">
          
          {/* Logo + Title */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:w-1/3 text-center md:text-left">
            <Link to="/"> 
              <img
                className="w-28 h-20 rounded-full mx-auto md:mx-0"
                src="images/cyberforenx_logo.png"
                alt="Cyberforenx Logo"
              />
            </Link>
            <h1 className="font-bold text-red-700 text-2xl md:text-5xl">
              Cyberforenx School
            </h1>
          </div>

          {/* Right Side: Links & Office Cards */}
          <div className="flex flex-col md:flex-row gap-6 md:w-2/3 justify-center md:justify-end">
            
            {/* Quick Links */}
            <div className="bg-blue-800 border-4 hover:scale-95 transition-transform border-blue-900 text-amber-50 text-center rounded-lg shadow-lg p-4 w-full md:w-72">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="flex flex-col gap-2">
                <li><Link to="/" className="hover:text-red-400">🏠 Home</Link></li>
                <li><Link to="/about" className="hover:text-red-400">ℹ️ About Us</Link></li>
                <li><Link to="/gallery" className="hover:text-red-400">🖼️ Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-red-400">📞 Contact</Link></li>
                <li><Link to="/courses" className="hover:text-red-400">📚 Courses</Link></li>
              </ul>

              {/* Social Media Links */}
              <div className="flex justify-center gap-6 mt-4 text-2xl">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <FaLinkedin />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Registration Office */}
            <div className="bg-blue-800 border-4 hover:scale-95 transition-transform border-blue-900 text-amber-50 text-center rounded-lg shadow-lg p-4 w-full md:w-72">
              <h2 className="text-xl font-semibold mb-2">Registration Office</h2>
              <p>info@cyberforenxschool.com</p>
              <p>Tel: 9628192156</p>
            </div>

            {/* Admissions Office */}
            <div className="bg-blue-800 border-4 hover:scale-95 transition-transform border-blue-900 text-amber-50 text-center rounded-lg shadow-lg p-4 w-full md:w-72">
              <h2 className="text-xl font-semibold mb-2">Admissions Office</h2>
              <p>info@cyberforenxschool.edu.in</p>
              <p>Tel: 9628192156</p>
            </div>
          </div>
        </div>

        {/* Bottom Contact Bar */}
        <div className="bg-black border-t border-black mt-6 py-4">
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <p className="bg-black text-red-700 border-2 hover:scale-95 transition-transform border-white rounded p-3 font-semibold text-center">
              📞 Contact us: 9628192156
            </p>
            <p className="bg-black text-red-700 border-2 hover:scale-95 transition-transform border-white rounded p-3 font-semibold text-center">
              🌐 Visit: <a href="mailto:info@cyberforenxschool.edu.in" className="text-red-700 hover:underline">info@cyberforenxschool.edu.in</a>
            </p>
            <p className="bg-black text-red-700 border-2 hover:scale-95 transition-transform border-white rounded p-3 font-semibold text-center">
              📍 Location: Lucknow, Uttar Pradesh
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

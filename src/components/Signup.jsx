import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../reusable components/Header'
import Footer from '../reusable components/Footer'

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    
    setTimeout(() => {
      navigate('/')  // redirect to home page after 2 seconds
    }, 2000)
  }

  return (
    <>
    <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-800 to-teal-700 px-4 py-16">
      <div className="max-w-md w-full bg-blue-900 bg-opacity-90 rounded-lg shadow-lg p-8 text-amber-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up to CyberForenx School</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded border border-blue-700 bg-blue-800 placeholder-amber-200 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded border border-blue-700 bg-blue-800 placeholder-amber-200 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded border border-blue-700 bg-blue-800 placeholder-amber-200 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded border border-blue-700 bg-blue-800 placeholder-amber-200 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button
            type="submit"
            disabled={submitted}
            className="w-full bg-amber-400 text-blue-900 font-bold py-3 rounded hover:bg-amber-300 transition disabled:opacity-60"
          >
            Create Account
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-center text-green-400 font-medium">
            Signup successful! Redirecting to home page...
          </p>
        )}
      </div>
    </div>
     
     <Footer/>
    </>
  )
}

export default Signup

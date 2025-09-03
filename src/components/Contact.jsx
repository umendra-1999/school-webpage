import React, { useState } from 'react'
import Header from '../reusable components/Header'
import Footer from '../reusable components/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can add form submission logic here (API call, email service, etc.)
    setSubmitted(true)
  }

  return (
    <>
    <div className='fixed top-0 w-full  z-50'>
    <Header/>
    </div>
    <div className="min-h-screen text-black relative top-10 bg-gradient-to-r from-blue-300 via-blue-100 to-blue-400  flex flex-col items-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact CyberForenx School</h1>
      <p className="mb-10 max-w-xl text-center font-light">
        We’d love to hear from you! Whether you have questions about admissions, courses, or anything else,
        please fill out the form below and we will get back to you as soon as possible.
      </p>

      <div className="w-full max-w-3xl bg-blue-800 bg-opacity-70 rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded border border-blue-600 text-amber-50 bg-blue-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded border border-blue-600 text-amber-50 bg-blue-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-3 rounded border border-blue-600 text-amber-50 bg-blue-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded border border-blue-600 text-amber-50 bg-blue-900 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
          ></textarea>

          <button
            type="submit"
            className="bg-amber-400 text-blue-900 font-semibold py-3 rounded hover:bg-amber-300 transition"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-center text-green-400 font-medium">
            Thank you for reaching out! We will get back to you shortly.
          </p>
        )}

        <div className="mt-10 border-t border-blue-600 pt-6 text-center space-y-2">
          <p><strong>Address:</strong> 123 CyberForenx Road, Knowledge City, India</p>
          <p><strong>Phone:</strong> +91 9628192156</p>
          <p><strong>Email:</strong> info@cyberforenxschool.edu.in</p>
          {/* <p><strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p> */}
        </div>
      </div>
    </div><br /><br />
    <Footer/>
    </>
  )
}

export default Contact

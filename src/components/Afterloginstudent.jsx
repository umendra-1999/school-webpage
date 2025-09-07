
import React, { useEffect, useState } from 'react';
import Header from '../reusable components/Header';

const Afterloginstudent = () => {
const [user, setUser] = useState(null)


 useEffect(() => {
    // Retrieve user info from localStorage
    const storedUser = localStorage.getItem('studentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    // If no user info, show message or redirect
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">No user info found. Please login.</p>
      </div>
    );
  }
  return (
    <>
    <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
     <div className="min-h-screen mt-40 md:mt-0 lg:mt-10 bg-gradient-to-r from-blue-400 to-indigo-600 flex flex-col items-center justify-center px-4 py-20 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center drop-shadow-lg">
        Welcome to CyberForenx School!
      </h1>
      <p className="max-w-3xl text-center text-lg md:text-xl mb-10 drop-shadow-md">
        We're excited to have you join our vibrant learning community. Prepare yourself for an amazing educational journey filled with growth, learning, and friendship.
      </p>
      
      <div className="pt-28 rounded-2xl bg-gradient-to-r from-green-400 to-teal-600 flex flex-col items-center justify-center px-4 py-20 text-white">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center drop-shadow-lg">
          Welcome Back, {user.fullName}!
        </h1>
        <p className="max-w-3xl text-center text-lg md:text-xl drop-shadow-md">
          Here you can check you,r attendence and school activities!.
        </p>
        </div>
      <img
        src="images/schoollife2.jpg"
        alt="Students at CyberForenx School"
        className="w-full max-w-3xl rounded-lg shadow-lg mb-10 object-cover"
      />
      <div className="flex flex-col sm:flex-row gap-8 max-w-3xl w-full justify-center">
        <div className="bg-white bg-opacity-20 rounded-lg p-6 flex-1 text-center">
          <h2 className="text-2xl font-semibold mb-3 text-black">Academics</h2>
          <p className='text-black'>
            Innovative curriculum, expert teachers, and personalized guidance to help you excel.
          </p>
        </div>
        <div className=" bg-white rounded-lg p-6 flex-1 text-center">
          <h2 className="text-2xl font-semibold text-black mb-3">Sports & Activities</h2>
          <p className='text-black'>
            Engage in sports, clubs, and activities to broaden your skills and friendships.
          </p>
        </div>
        <div className="bg-white  rounded-lg p-6 flex-1 text-center">
          <h2 className="text-2xl font-semibold mb-3 text-black">Support & Growth</h2>
          <p className='text-black'>
            Safe environment focused on your well-being, growth mindset, and future success.
          </p>
        </div>
      </div>
    </div>  
    </>
  )
}

export default Afterloginstudent

import React, { useEffect, useState } from 'react';
import Footer from '../reusable components/Footer';
import Header from '../reusable components/Header';

const AfterLoginTeacher = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user info from localStorage
    const storedUser = localStorage.getItem('teacherUser');
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

      <div className="pt-28 mt-40 md:mt-0 lg:mt-10 bg-gradient-to-r from-green-400 to-teal-600 flex flex-col items-center justify-center px-4 py-20 text-white">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center drop-shadow-lg">
          Welcome Back, {user.fullName}!
        </h1>
        <p className="max-w-3xl text-center text-lg md:text-xl drop-shadow-md">
          Ready to manage your classes and inspire students. Use the links below to get started.
        </p>
        
        <div className=" bg-gradient-to-r from-green-400 to-teal-600 flex flex-col items-center justify-center px-4 py-20 text-white">
            

     
      <div className="flex flex-col sm:flex-row gap-8 max-w-4xl w-full justify-center">
        <div className="bg-white text-black bg-opacity-20 rounded-lg p-6 flex-1 text-center">
          <h2 className="text-2xl  font-semibold mb-3">My Classes</h2>
          <p>View and manage your current classes, schedules, and materials.</p>
          <button className="mt-4 px-5 py-2 bg-green-600 rounded hover:bg-green-700 transition">
            Manage Classes
          </button>
        </div>
        <div className="bg-white text-black bg-opacity-20 rounded-lg p-6 flex-1 text-center">
          <h2 className="text-2xl font-semibold mb-3">Student Performance</h2>
          <p>Track attendance, grades, and progress reports for your students.</p>
          <button className="mt-4 px-5 py-2 bg-green-600 rounded hover:bg-green-700 transition">
            View Reports
          </button>
        </div>
        <div className="bg-white text-black bg-opacity-20 rounded-lg p-6 flex-1 text-center">
          <h2 className="text-2xl font-semibold mb-3">Communications</h2>
          <p>Send announcements and stay connected with students and parents.</p>
          <button className="mt-4 px-5 py-2 bg-green-600 rounded hover:bg-green-700 transition">
            Messages
          </button>
        </div>
      </div>
    </div>
      </div>

    
    </>
  );
};

export default AfterLoginTeacher;

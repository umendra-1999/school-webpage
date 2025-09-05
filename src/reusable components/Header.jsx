import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-amber-400 border-b-4 border-blue-700 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 justify-center sm:justify-start flex-grow">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-blue-800 transition ${
                isActive ? 'bg-blue-700 text-white' : ''
              }`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-blue-800 transition ${
                isActive ? 'bg-blue-700 text-white' : ''
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-blue-800 transition ${
                isActive ? 'bg-blue-700 text-white' : ''
              }`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-blue-800 transition ${
                isActive ? 'bg-blue-700 text-white' : ''
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-blue-800 transition ${
                isActive ? 'bg-blue-700 text-white' : ''
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Separate Student and Teacher Buttons */}
        <div className="flex gap-4 mt-4 sm:mt-0 sm:ml-6">
          <NavLink
            to="/studentinfo"
            className={({ isActive }) =>
              `inline-block bg-amber-400 text-blue-900 font-semibold px-6 py-2 rounded shadow hover:bg-amber-300 transition ${
                isActive ? 'ring-4 ring-amber-300' : ''
              }`
            }
          >
            Student
          </NavLink>
          <NavLink
            to="/teacherinfo"
            className={({ isActive }) =>
              `inline-block bg-amber-400 text-blue-900 font-semibold px-6 py-2 rounded shadow hover:bg-amber-300 transition ${
                isActive ? 'ring-4 ring-amber-300' : ''
              }`
            }
          >
            Teacher
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import Header from '../reusable components/Header';
import Footer from '../reusable components/Footer';

const Home = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted successfully!");
    setEmail("");
  };

  return (
    <>
      <div className="container mx-auto px-4 text-center">

        {/* Navigation Section */}
        <div className="fixed top-0 w-full px-2  z-50">
          <Header />
        </div>

        {/* Spacer for fixed header */}
        <div className="pt-28"></div>

        {/* Header Section */}
        <div className="relative top-6 flex flex-col md:flex-row mt-14 md:mt-0  items-center justify-center rounded-3xl bg-amber-100 gap-6 p-2 mb-6 text-center md:text-left">
                  <img
               className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover"
              src="images/cyberforenx_logo.png"
               alt="CyberForenx Logo"/>
                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex-1">
                   Welcome to CyberForenx School
                      </h1>   
            <img
             className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover"
             src="images/school logo.jpeg"
                alt="School Logo" />
                </div>

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4">
          <img
            src="images/school image.jpg"
            alt="School"
            className="w-full md:w-1/2 rounded-4xl object-cover"
          />
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl text-red-800 font-semibold mb-4">
              Back to School
            </h1>
            <p className="text-lg md:text-2xl text-red-900 mb-4">
              Welcome to all of our students
            </p>
            <img
              className="rounded-4xl w-full"
              src="https://static.toiimg.com/thumb/msid-104665854,width-1280,height-720,resizemode-4/104665854.jpg"
              alt="School Event"
            />
          </div>
        </div>

        <div className="border-4 rounded-4xl bg-indigo-500 grid p-4 gap-4 items-center max-w-4xl mx-auto my-10">
          <p className="text-4xl font-bold">Open Enrollment.</p>
          <p className="text-center text-amber-50 text-base md:text-lg leading-relaxed">
            Welcome to Cyberforenx School, where excellence meets opportunity!<br />
            Enroll your child in a nurturing environment with experienced teachers, modern facilities, and a vibrant learning community.<br />
            Holistic education from Kindergarten to Grade 12<br />
            Emphasis on academics, sports, and arts<br />
            State-of-the-art classrooms and playgrounds<br />
            Safe and supportive atmosphere<br />
            Scholarships and financial aid available<br />
            Join us for a bright future!<br />
            Apply now to secure your child's spot for the upcoming academic year.
          </p>
          <p className="bg-yellow-100 border-2 hover:scale-95 border-yellow-400 rounded p-3 font-semibold mt-4">📞 Contact us: 9628192156</p>
          <p className="bg-yellow-100 border-2 hover:scale-95 border-yellow-400 rounded p-3 font-semibold">🌐 Visit: www.cyberforenx_school.com</p>
          <p className="bg-yellow-100 border-2 hover:scale-95 border-yellow-400 rounded p-3 font-semibold">📍 Location: Lucknow, Uttar Pradesh</p>
        </div>

        <div className="border-4 rounded-4xl bg-indigo-500 grid p-4 gap-4 max-w-7xl mx-auto my-10">
          <p className="text-4xl font-bold mb-2">Student Life.</p>
          <p className="text-center text-amber-50 text-base md:text-lg leading-relaxed">
            Student life is a valuable and formative phase where <br />
            students learn not only academics but also important <br />
            life skills like discipline, sports, teamwork, and time management.<br />
            It is a time of growth, friendships, challenges, and self-discovery <br />
            that lays the foundation for the future. <br />
            This period shapes character and helps students prepare for life's opportunities and obstacles ahead.
          </p>
        </div>

        <div className="container mx-auto bg-orange-600 hover:scale-105 hover:bg-orange-500 transition-transform duration-300 p-6 rounded w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-center text-white mb-16">
          <h1 className="text-2xl font-bold mb-2">Life & Culture</h1>
          <p className="mb-1">Follow</p>
          <p className="mb-1 font-semibold">#Cyberforenx_school</p>
          <p>on Instagram</p>
        </div>

        {/* School Life Images */}
        <div className="flex flex-col max-w-4xl mx-auto gap-4 px-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <img
              src="images/schoollife2.jpg"
              alt="School Life 2"
              className="w-full sm:w-1/2 object-cover border-4 rounded-4xl"
            />
            <img
              src="images/schoollife3.jpg"
              alt="School Life 3"
              className="w-full sm:w-1/2 object-cover border-4 rounded-4xl"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <img
              src="images/schoollife4.jpg"
              alt="School Life 4"
              className="w-full sm:w-1/2 object-cover border-4 rounded-xl"
            />
            <img
              src="images/schoollife6.jpg"
              alt="School Life 6"
              className="w-full sm:w-1/2 object-cover border-4 rounded-xl"
            />
          </div>
        </div>

        {/* Courses Provided */}
        <div className="max-w-6xl mx-auto px-6 py-10 my-16">
          <h1 className="text-4xl md:text-5xl border-4 bg-black font-bold text-center text-red-700 mb-8">
            Courses Provided
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <p className="bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 hover:scale-105 hover:bg-blue-700 transition-transform duration-300">
              ARTS 📖
            </p>
            <p className="bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 hover:scale-105 hover:bg-blue-700 transition-transform duration-300">
              COMMERCE 📖
            </p>
            <p className="bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 hover:scale-105 hover:bg-blue-700 transition-transform duration-300">
              MATHS 📖
            </p>
            <p className="bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 hover:scale-105 hover:bg-blue-700 transition-transform duration-300">
              BIOLOGY 📖
            </p>
            <p className="bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 hover:scale-105 hover:bg-blue-700 transition-transform duration-300">
              PHYSICAL EDUCATION 📖
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="container mx-auto p-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded my-16">
          <h1 className="text-3xl font-bold mb-2">SIGN UP FOR</h1>
          <p className="mb-1 text-2xl font-bold">SCHOOL NEWS</p>
          <p className="mb-4 text-2xl">
            Stay up-to-date with <br /> the latest news
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="email" className="text-lg font-semibold">Enter your E-mail here!</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;

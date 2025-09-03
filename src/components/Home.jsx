
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../reusable components/Header';
import Footer from '../reusable components/Footer';

const Home = () => {

   const [email, setEmail] = useState("");  // here use usestate to update the email 

  const handleSubmit = (e) => {
    e.preventDefault();  // here preventdefault is use to stop the default action of the page after reload
    alert("Submitted successfully!");
    setEmail("");
  };
  return (
    <>
    <div className="container mx-auto  text-center">

      
       {/* Navigation Section imported the header file from the header.jsx from reusable-components */}
     <div className="fixed top-0 w-full  z-50 ">
  <Header />
</div> <br /><br /> 


{/* Header Section */}
<div className="relative pt-28 flex top-6   flex-col md:flex-row items-center justify-center rounded-3xl bg-amber-100 gap-6 p-6 mb-6 text-center md:text-left">
  {/* Left Logo */}
  <img
    className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover"
    src="images/cyberforenx_logo.png"
    alt="CyberForenx Logo"
  />

  {/* Heading */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex-1">
    Welcome to CyberForenx School
  </h1>

  {/* Right Logo */}
  <img
    className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover"
    src="images/school logo.jpeg"
    alt="School Logo"
  />
</div>

     

      {/* Welcome Section */}

      <div className="flex flex-col  md:flex-row items-center md:items-start gap-6 p-4">
  <img src="images/school image.jpg" alt="School" className="w-full rounded-4xl md:w-1/2 object-cover" />
  <div className="md:w-1/2">
    <h1 className="text-4xl md:text-6xl text-red-800 font-semibold mb-4">
      Back to School
    </h1>
    <p className="text-lg md:text-2xl text-red-900">
      Welcome to all of our students
    </p>
    <img className='rounded-4xl' src="https://static.toiimg.com/thumb/msid-104665854,width-1280,height-720,resizemode-4/104665854.jpg" alt="" />
  </div>
</div>
<div className="border-4 rounded-4xl bg-indigo-500   grid p-4 gap-4 items-center max-w-4xl mx-auto">
  <p className="text-4xl font-bold">Open Enrollment.</p>
  <p className="text-center text-amber-50  text-base md:text-lg">
    Welcome to Cyberforenx School, where excellence meets opportunity!<br/>
    Enroll your child in a nurturing environment with experienced teachers, modern facilities, and a vibrant learning community.<br/>
    Holistic education from Kindergarten to Grade 12<br/>
    Emphasis on academics, sports, and arts<br/>
    State-of-the-art classrooms and playgrounds<br/>
    Safe and supportive atmosphere<br/>
    Scholarships and financial aid available<br/>
    Join us for a bright future!<br/>
    Apply now to secure your child's spot for the upcoming academic year.
  </p>
  <p className="bg-yellow-100 border-2 hover:scale-95 border-yellow-400 rounded p-3 font-semibold">📞 Contact us: 9628192156</p>
  <p className="bg-yellow-100 border-2 hover:scale-95 border-yellow-400 rounded p-3 font-semibold">🌐 Visit: www.cyberforenx_school.com</p>
  <p className="bg-yellow-100 border-2 hover:scale-95 border-yellow-400 rounded p-3 font-semibold">📍 Location: Lucknow, Uttar Pradesh</p>
</div>


   <div className="border-4 rounded-4xl bg-indigo-500   grid p-4 gap-4 relative top-10 items-center max-w-8xl mx-auto">
  <p className="text-4xl font-bold">Students life.</p>
  <p className="text-center text-amber-50  text-base md:text-lg">
  Student life is a valuable and formative phase where <br />
  students learn not only academics but also important  <br />
  life skills like discipline,sports, teamwork, and time management.<br/> 
  It is a time of growth, friendships, challenges, and self-discovery <br />
 that lays the foundation for the future. <br />
 This period shapes character and helps students prepare for life's opportunities and obstacles ahead.
  </p>
</div>
<div className="container mx-auto relative top-5 border-4 bg-orange-600 hover:scale-105 hover:bg-orange-500 transition-transform duration-300 p-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/4 rounded">
  <h1 className="text-2xl font-bold mb-2">Life & Culture</h1>
  <p className="mb-1">Follow</p>
  <p className="mb-1">#Cyberforenx_school</p>
  <p>on instagram</p>
</div>
{/* here the images are shown of the school life */}
<div className="flex flex-col max-w-4xl mx-auto gap-4">
  <div className="flex gap-4 relative top-14">
    <img src="images/schoollife2.jpg" alt="School Life 2" className="w-1/2 object-cover border-4 rounded-4xl" />
    <img src="images/schoollife3.jpg" alt="School Life 3" className="w-1/2 object-cover border-4 rounded-4xl" />
  </div>
  <div className='flex gap-4'>
  <img src="images/schoollife4.jpg" alt="School Life 4" className="w-1/2 object-cover h-110 relative top-14 border-4 rounded-xl" />
  <img src="images/schoollife6.jpg " alt="School Life 4" className="w-1/2 object-cover h-110 relative top-14 border-4 rounded-xl" />
  </div>
</div>

<div className="max-w-6xl mx-auto px-6 py-10 relative top-20">
  {/* Heading */}
  <h1 className="text-4xl md:text-5xl border-4 bg-black font-bold text-center text-red-700 mb-8">
    Courses Provided
  </h1>

  {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-6">
    
    
    <p className="bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 hover:scale-105 hover:bg-blue-700 transition-transform duration-300">
      ARTS📖
    </p>
    <p className="bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 hover:scale-105 hover:bg-blue-700 transition-transform duration-300">
      COMMERCE📖
    </p>
    <p className="bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 hover:scale-105 hover:bg-blue-700 transition-transform duration-300">
      MATHS📖
    </p>
    <p className="bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 hover:scale-105 hover:bg-blue-700 transition-transform duration-300">
      BIOLOGY📖
    </p>
    <p className="bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 hover:scale-105 hover:bg-blue-700 transition-transform duration-300">
      PHYSICAL EDUCATION📖
    </p>
  </div>
</div>



{/* here  the form handle is written means the form validation is done here */}
<p className='border-2 border-amber-700 w-full font-extrabold relative top-20'></p>
<div className="container mx-auto relative top-20 p-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded">
  <h1 className="text-3xl font-bold mb-2">SIGN UP FOR</h1>
  <p className="mb-1 text-2xl font-bold">SCHOOL NEWS</p>
  <p className="mb-1 text-2xl">Stay up-to-date with <br /> the latest news</p>

   <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 flex flex-col gap-4">
      <label className="text-lg font-semibold" >Enter your E-mail here!</label>
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

<div>


</div>
    </div> <br /><br /><br />
      <Footer/> <br />
    </> 
  );
};

export default Home;

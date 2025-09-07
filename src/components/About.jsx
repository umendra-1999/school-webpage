import React from 'react'
import Header from '../reusable components/Header'
import Footer from '../reusable components/Footer'

const About = () => {
  return (
    <>
    <div className='fixed top-0 w-full  z-50'>
    <Header/>
    </div>
        

        <div className="max-w-7xl mx-auto mt-40 md:mt-0 lg:mt-10 px-6 py-10 space-y-16 ">


  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-950 text-center">
    Welcome, To The World's <br /> Best School
  </h1>

 
  <div className="flex flex-col md:flex-row gap-10 md:gap-16">
    
   
    <div className="flex-shrink-0 md:w-1/3">
      <img
        src="images/school image.jpg"
        alt="School"
        className="rounded-xl object-cover w-full h-full shadow-lg"
      />
    </div>

   
    <div className="flex flex-col gap-10 md:w-2/3">

     
      <div className="bg-blue-900 text-amber-50 p-6 rounded-xl shadow-xl border-2 border-blue-800">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-amber-400 pb-2">
          🌟 OUR MISSION
        </h2>
        <p className="leading-relaxed whitespace-pre-line">
          At CyberForenx School, our mission is to provide a holistic and future‑ready education that nurtures knowledge, creativity, and character.
          We strive to:
          Empower every student with critical thinking and digital literacy.
          Foster a culture of innovation, values, and lifelong learning.
          Encourage academic excellence, arts, and sports to unlock individual potential.
          Create a safe, inclusive, and inspiring environment where students grow into responsible global citizens.
        </p>
      </div>

   
      <div className="bg-blue-900 text-amber-50 p-6 rounded-xl shadow-xl border-2 border-blue-800">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-amber-400 pb-2">
          🌟 OUR VISION
        </h2>
        <p className="leading-relaxed whitespace-pre-line">
          CyberForenx School envisions a vibrant learning community where every student is empowered to excel academically, embrace innovation, and develop the values essential for lifelong success and responsible global citizenship.
          We strive to prepare students to thrive in a rapidly changing world, fostering creativity, digital literacy, and a passion for learning, while celebrating diversity and inclusion across our school community.
        </p>
      </div>
    </div>
  </div>


  <div>
     <section>
    <h1 className="text-4xl  sm:text-5xl md:text-6xl font-bold text-green-950 text-center p-6">FACILITIES PROVIDED</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        "images/aboutusimg/facilitiesimg/facility1.webp",
        "images/aboutusimg/facilitiesimg/facility2.jpg",
        "images/aboutusimg/facilitiesimg/facility3.jpg",
        "images/aboutusimg/facilitiesimg/facility4.jpg",
        "images/aboutusimg/facilitiesimg/facility5.jpg",
        "images/aboutusimg/facilitiesimg/facility6.webp",
      ].map((src, idx) => (
        <div
          key={idx}
          className="overflow-hidden rounded-xl shadow-lg border-2 border-blue-900"
        >
          <img
            src={src}
            alt={`School image ${idx + 1}`}
            className="object-cover w-full h-56 sm:h-64 md:h-48 lg:h-56 xl:h-64 hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </section>
  </div>


  <section>
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
      Courses Provided
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {["ARTS", "COMMERCE", "MATHS", "BIOLOGY", "PHYSICAL EDUCATION"].map((course) => (
        <p
          key={course}
          className="bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 hover:scale-105 hover:bg-blue-700 transition-transform duration-300"
        >
          {course}
        </p>
      ))}
    </div>
  </section>
  

  <div className="max-w-4xl mx-auto p-6">
  <h1 className="text-4xl font-bold text-center mb-10 text-green-950">ACHIEVEMENTS</h1>
  
  <div className="space-y-6">
    <p className="bg-green-600 text-amber-50 p-5 rounded-lg shadow-md border-2  hover:scale-105 transition-transform duration-300">
      Consistent top performance in board exams, with many students ranking in the top percentile.
    </p>
    
    <p className="bg-green-600 text-amber-50 p-5 rounded-lg shadow-md border-2  hover:scale-105 transition-transform duration-300">
      Champions and prize-winners in various inter-school sports like football and basketball.
    </p>

    <p className="bg-green-600 text-amber-50 p-5 rounded-lg shadow-md border-2  hover:scale-105 transition-transform duration-300">
      Award-winning innovative projects in science fairs and robotics competitions.
    </p>

    <p className="bg-green-600 text-amber-50 p-5 rounded-lg shadow-md border-2  hover:scale-105 transition-transform duration-300">
      Strong commitment to community service with successful social and environmental initiatives.
    </p>

    <p className="bg-green-600 text-amber-50 p-5 rounded-lg shadow-md border-2  hover:scale-105 transition-transform duration-300">
      Recognized for organizing vibrant cultural festivals with wide participation.
    </p>

    <p className="bg-green-600 text-amber-50 p-5 rounded-lg shadow-md border-2  hover:scale-105 transition-transform duration-300">
      Established international collaborations promoting global learning and student exchanges.
    </p>
  </div>
</div>


</div>
<Footer/>

    </>
  )
}

export default About

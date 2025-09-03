import React from 'react'
import Header from '../reusable components/Header'
import Footer from '../reusable components/Footer'

const Gallery = () => {
  return (
    <>
    <div className='fixed top-0 w-full  z-50'>
    <Header/>
    </div><br /><br /><br /><br />
         <div className='bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400'>
        <section>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <h1 className='text-4xl md:text-5xl font-bold relative top-6 text-red-700'>ATTRACTIVE IMAGES OF OUR SCHOOLS➡️</h1>
      {[
        "images/gallery/schlimg1.jpg",
        "images/gallery/schlimg2.jpeg",
        "images/gallery/schlimg3.jpg",
        "images/gallery/schlimg4.jpg",
        "images/gallery/schlimg5.jpg",
      ].map((src, idx) => (
        <div
          key={idx}
          className="overflow-hidden rounded-xl shadow-lg "
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


  <div className="max-w-5xl mx-auto p-6">
    <p className='border-2 '></p>
  <h1 className="text-5xl font-extrabold text-center mb-8 text-white">
    SPORTS DAY 🤾🤾
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="rounded-lg shadow-lg overflow-hidden border-2  hover:scale-105 transition-transform duration-300">
      <img
        src="images/gallery/sportsimg/sport1.webp"
        alt="Sport 1"
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="rounded-lg shadow-lg overflow-hidden border-2  hover:scale-105 transition-transform duration-300">
      <img
        src="images/gallery/sportsimg/sport2.jpg"
        alt="Sport 2"
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="rounded-lg shadow-lg overflow-hidden border-2 hover:scale-105 transition-transform duration-300">
      <img
        src="images/gallery/sportsimg/sport3.jpg"
        alt="Sport 3"
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="rounded-lg shadow-lg overflow-hidden border-2  hover:scale-105 transition-transform duration-300">
      <img
        src="images/gallery/sportsimg/sport4.webp"
        alt="Sport 4"
        className="w-full h-48 object-cover"
      />
    </div>
  </div>
</div>



<div className="max-w-5xl mx-auto p-6">
<p className='border-2'></p>  
  <h1 className="text-5xl font-extrabold text-center mb-8 text-white">
    ANNUAL DAY 🕺💃
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="rounded-lg shadow-lg overflow-hidden  hover:scale-105 transition-transform duration-300">
      <img
        src="images/gallery/annual/1.webp"
        alt="Sport 1"
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src="images/gallery/annual/2.jpg"
        alt="Sport 2"
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="rounded-lg shadow-lg overflow-hidden  hover:scale-105 transition-transform duration-300">
      <img
        src="images/gallery/annual/3.webp"
        alt="Sport 3"
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="rounded-lg shadow-lg overflow-hidden  hover:scale-105 transition-transform duration-300">
      <img
        src="images/gallery/annual/4.gif"
        alt="Sport 4"
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="rounded-lg shadow-lg overflow-hidden  hover:scale-105 transition-transform duration-300">
      <img
        src="images/gallery/annual/5.jpg"
        alt="Sport 4"
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="rounded-lg shadow-lg overflow-hidden  hover:scale-105 transition-transform duration-300">
      <img
        src="images/gallery/annual/6.gif"
        alt="Sport 4"
        className="w-full h-48 object-cover"
      />
    </div>
    
  </div>
</div>
</div>
  
  <Footer/>

    </>
  )
}

export default Gallery

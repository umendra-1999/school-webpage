import React from 'react'
import Header from '../reusable components/Header'
import Footer from '../reusable components/Footer'
import { useState } from 'react'

const Courses = () => {
   const [email, setEmail] = useState("");  // here use usestate to update the email 
  
    const handleSubmit = (e) => {
      e.preventDefault();  // here preventdefault is use to stop the default action of the page after reload
      alert("Thank You We Will Reach You Soon!");
      setEmail("");
    };
  return (
    <>
      <Header/>

      <div className="px-4 py-8 bg-black">
        <h1 className="text-5xl font-bold text-center text-cyan-400 mb-10">Courses we provide</h1>

        {/* Column layout */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 transition-transform duration-300 hover:scale-105 hover:bg-blue-500">
            <div className="mb-4 hover:scale-110">
              <img
                src="https://yuukke.com/wp-content/uploads/2023/01/What-an-Arts-Student-Needs-to-Know-About-Getting-Started-with-Data-Science.png"
                alt="Arts"
                className="mx-auto h-32 rounded object-cover"
                loading="lazy"
              />
            </div>
            🎓 ARTS 📖
            <p className='font-light mt-4 text-left'>
              The Arts stream offers a broad range of subjects such as History, Political Science, Economics, Geography, Psychology, and Literature. It helps students build strong communication, analytical, and creative skills, making it an ideal choice for those aspiring to pursue careers in Law, Journalism, Civil Services, Social Sciences, Education, and more.
              <br /><br />
              🔑 Admission Process:<br />
              Eligibility: Students who have passed Class 10th from a recognized board.<br />
              Selection: Admission is merit-based, considering Class 10th results.<br />
              Procedure: Fill the admission form → Submit documents → Pay fees → Confirm admission.
              <br /><br />
              ✅ The Arts stream provides a flexible and career-focused pathway for students interested in Humanities and Social Sciences.
            </p>
          </div>

          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 transition-transform duration-300 hover:scale-105 hover:bg-blue-500">
            <div className="mb-4 hover:scale-110">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4b1rSbyWosgz49tg4kw5V-1jELRbR2xSTmg&s"
                alt="Commerce"
                className="mx-auto h-32 rounded object-cover"
                loading="lazy"
              />
            </div>
            📚 COMMERCE 📖
            <p className='font-light mt-4 text-left'>
              The Commerce stream provides students with knowledge in Business Studies, Accountancy, Economics, Mathematics, and Entrepreneurship. It develops a practical understanding of trade, finance, and management, making it an excellent choice for students aiming for careers in Business, Chartered Accountancy, Banking, Finance, Management, and Entrepreneurship.
              <br /><br />
              🔑 Admission Process:<br />
              Eligibility: Students who have passed Class 10th from a recognized board.<br />
              Selection: Admission is merit-based, considering Class 10th marks.<br />
              Procedure: Fill the admission form → Submit documents → Pay fees → Confirm admission.
              <br /><br />
              ✅ The Commerce stream offers a career-oriented pathway for students interested in business, finance, and management fields.
            </p>
          </div>

          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 transition-transform duration-300 hover:scale-105 hover:bg-blue-500">
            <div className="mb-4 hover:scale-110">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqQWEO1ud_RaKB9twJgsLNRiCZvfiwdyZQQ&s"
                alt="Maths"
                className="mx-auto h-32 rounded object-cover"
                loading="lazy"
              />
            </div>
            🔢 MATHS 📖
            <p className='font-light mt-4 text-left'>
              The Maths stream (PCM) focuses on Physics, Chemistry, and Mathematics, along with optional subjects. It builds logical reasoning, problem-solving, and analytical skills, making it ideal for students aspiring for careers in Engineering, Computer Science, Architecture, Data Science, Research, and Technology-related fields.
              <br /><br />
              🔑 Admission Process:<br />
              Eligibility: Students who have passed Class 10th (preferably with strong mathematics performance) from a recognized board.<br />
              Selection: Admission is strictly merit-based, depending on Class 10th results.<br />
              Procedure: Fill the admission form → Submit documents → Pay fees → Confirm admission.
              <br /><br />
              ✅ The Maths stream provides a solid foundation for higher studies in Engineering, IT, and Technical domains.
            </p>
          </div>

          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 transition-transform duration-300 hover:scale-105 hover:bg-blue-500">
            <div className="mb-4 hover:scale-110">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgTRbCvxIFpR07qEbcsbRDaw32m7OiIFbnA&s"
                alt="Biology"
                className="mx-auto h-32 rounded object-cover"
                loading="lazy"
              />
            </div>
            🧬 BIOLOGY 📖
            <p className='font-light mt-4 text-left'>
              The Biology stream (PCB) includes Physics, Chemistry, and Biology as core subjects. It is ideal for students interested in healthcare, life sciences, and research. This stream develops scientific knowledge, analytical thinking, and practical lab skills, opening pathways to careers in Medicine, Dentistry, Pharmacy, Nursing, Biotechnology, Microbiology, Genetics, and Environmental Sciences.
              <br /><br />
              🔑 Admission Process:<br />
              Eligibility: Students who have passed Class 10th (preferably with strong science performance) from a recognized board.<br />
              Selection: Admission is merit-based, considering Class 10th marks.<br />
              Procedure: Fill the admission form → Submit documents → Pay fees → Confirm admission.
              <br /><br />
              ✅ The Biology stream provides a specialized foundation for students interested in medical and life science careers.
            </p>
          </div>

          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 bg-blue-800 text-amber-50 font-semibold text-center p-6 rounded-lg shadow-lg border-2 border-blue-900 transition-transform duration-300 hover:scale-105 hover:bg-blue-500">
            <div className="mb-4 hover:scale-110">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7v-LOtmje5gd_FRfwSbz_skmRHcLQ8RN-sA&s"
                alt="Physical Education"
                className="mx-auto h-32 rounded object-cover"
                loading="lazy"
              />
            </div>
            🏃 PHYSICAL EDUCATION 📖
            <p className='font-light mt-4 text-left'>
              The Physical Education stream focuses on developing physical fitness, sports skills, health awareness, and overall well-being. Subjects include theory of sports, nutrition, exercise science, yoga, and practical training. This stream is ideal for students aspiring for careers in Sports, Fitness Training, Coaching, Physiotherapy, Physical Education Teaching, and Health & Wellness fields.
              <br /><br />
              🔑 Admission Process:<br />
              Eligibility: Students who have passed Class 10th from a recognized board.<br />
              Selection: Admission is generally merit-based, considering Class 10th marks.<br />
              Procedure: Fill the admission form → Submit required documents → Pay fees → Confirm admission.
              <br /><br />
              ✅ The Physical Education stream encourages a healthy lifestyle while preparing students for careers in sports, fitness, and health sciences.
            </p>
          </div>
        </div>
      </div>


        <div className='bg-black'>
       <div className="container mx-auto bg-amber-400  p-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded">
  <h1 className="text-3xl font-bold mb-2 text-center">FOR MORE DETAILS</h1>
  <p className="mb-1 text-2xl font-bold text-center">CONTACT HERE!</p>

   <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 flex flex-col gap-4">
      <label className="text-lg font-semibold" >Enter your E-mail here!</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className='text-center'>OR</p>
        <p className="bg-yellow-100 border-2 hover:scale-95 border-black rounded p-3 font-semibold">📞 Contact us: 9628192156</p>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
</div>
      </div>
      <Footer/>
    </>
  )
}

export default Courses

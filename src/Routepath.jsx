import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Courses from './components/Courses'
import Header from './reusable components/Header'
import Footer from './reusable components/Footer'
import Signup from './components/Signup'
import Studentinfo from './components/Studentinfo'
import Teacherinfo from './components/Teacherinfo'
import Afterloginstudent from './components/Afterloginstudent'
import Afterloginteacher from './components/Afterloginteacher'

const Routepath = () => {
  return (
    
    <BrowserRouter>
   <Routes>
    
    <Route path='/' element={<App/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>   
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/gallery' element={<Gallery/>}></Route>
    <Route path='/courses' element={<Courses/>}></Route>
    <Route path='/header' element={<Header/>}></Route>
    <Route path='/footer' element={<Footer/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/studentinfo' element={<Studentinfo/>}></Route>
    <Route path='/teacherinfo' element={<Teacherinfo/>}></Route>
    <Route path='/afterloginstudent' element={<Afterloginstudent/>}></Route>
    <Route path='/afterloginteacher' element={<Afterloginteacher/>}></Route>
    
    


   </Routes>

    </BrowserRouter>
    
  )
}

export default Routepath

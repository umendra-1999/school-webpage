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
    
    


   </Routes>

    </BrowserRouter>
    
  )
}

export default Routepath

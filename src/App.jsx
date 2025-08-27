import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div className='wrapper '>
    <Navbar/>
    <Outlet className="outlet"/>
    <Footer/>
    </div>
  )
}

export default App
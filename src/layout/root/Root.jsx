import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Home_Page/Navbar_Part/Navbar'
import Footer from '../../components/Home_Page/Footer_Part/Footer'

const Root = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>  
      <Footer/> 
    </div>
  )
}

export default Root

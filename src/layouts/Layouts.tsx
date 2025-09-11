import React, { Children } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

export default function Layouts() {
  return (
    <div className="">
      <nav className='fixed top-0 start-0 end-0 z-50 bg-white'>
        <Navbar />
      </nav>

      <div className="pt-10 min-h-dvh">
        <Outlet />
      </div>

      <footer><Footer/></footer>
    </div>
  )
}

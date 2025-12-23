import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Taskify
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <div onClick={() => { navigate('/') }} className="hover:text-blue-600 cursor-pointer">Home</div>
          <div onClick={() => { navigate('/about') }} className="hover:text-blue-600 cursor-pointer">About</div>
          <div className="hover:text-blue-600 cursor-pointer">Features</div>
          <div className="hover:text-blue-600 cursor-pointer">Contact</div>
          <div onClick={() => { navigate('/todo') }} className="hover:text-blue-600 cursor-pointer">Todo</div>

        </div>

        {/* Sign In Button */}
        {!token && (
          <div className='flex gap-4'>
            <button onClick={() => { navigate('/signup') }} className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Sign Up</button>
          </div>
        )}
        {token && (
          <div onClick={()=>{
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            navigate('/signin')
          }} 
          className='flex gap-4'>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Log Out</button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar

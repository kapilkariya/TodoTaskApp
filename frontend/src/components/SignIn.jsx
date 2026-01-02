import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate =useNavigate()
  const [input, setinput] = useState({
    email: "",
    password: ''
  })
  const change = (e) => {
    const { name, value } = e.target;
    setinput({ ...input, [name]: value })
  }
  const submit =async (e) => {
    e.preventDefault();
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/signin`,input).then((response)=>{
      localStorage.setItem("token",response.data.token);
      console.log(response.data.user)
      localStorage.setItem("user",JSON.stringify(response.data.user))
      setinput({
        email: "",
        password: ''
      })
      navigate('/todo')
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h1>

        <form className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={change}
              value={input.email}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={change}
              value={input.password}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button onClick={submit}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>

        </form>

      </div>
    </div>
  )
}

export default SignIn

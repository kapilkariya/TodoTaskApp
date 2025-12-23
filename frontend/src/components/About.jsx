import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          About Us
        </h1>

        <p className="text-gray-600 leading-relaxed mb-4">
          We are a simple and powerful platform designed to help users manage
          their blogs, tasks, and ideas efficiently. Our goal is to keep things
          minimal, fast, and easy to use.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          This project is built using modern web technologies like React,
          Tailwind CSS, and Node.js. It focuses on clean UI, smooth user
          experience, and practical functionality.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Whether you are a student, developer, or content creator, this
          platform helps you stay organized and productive without unnecessary
          complexity.
        </p>

      </div>
    </div>
  )
}

export default About

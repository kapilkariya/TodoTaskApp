import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center h-130 text-center gap-3'>
        <p className='text-6xl font-medium'>Organise your </p>
        <p className='text-6xl font-medium'>work and life,finally.</p>
        <p className='text-gray-600 text-xl'>Become focussed and organised</p>
        <button className="bg-blue-600 text-white px-5 py-2 w-35 h-10 rounded-lg hover:bg-blue-700 transition">Make Todo</button>
      </div>
    </div>
  )
}

export default Home

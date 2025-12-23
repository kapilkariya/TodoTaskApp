import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Signup from './components/Signup'
import Todo from './components/Todo'
import SignIn from './components/SignIn'

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/todo' element={<Todo/>} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App

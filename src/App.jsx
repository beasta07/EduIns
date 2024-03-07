// import React from 'react'

import './App.css'
import CourseDetail from './components/CourseDetail'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Landing from './pages/Landing'
import Login from './pages/Login'

function App() {

  return (
    <>
    <Header />
    <Landing />
    <About />
    <Contact />
    <CourseDetail />
    <Login />
    <Footer />
    </>
  )
}

export default App

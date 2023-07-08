import React from 'react'
import Contact from './pages/Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
// import Application from './pages/Application/Application'
import Faq from './pages//Faq/Faq'
import About from './pages/About/About'
import Services from './pages/Services/Services'
// import ApplicationPrev from './pages/Application/ApplicationPrev'
// import Admin from './pages/Application/ApplicationAdmin'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/application' element={<Application/>}/> */}
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        {/* <Route path='/admin/:docId' element={<ApplicationPrev/>}/>
        <Route path='/admin' element={<Admin/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import { About, Contact, Landing, Skills } from './pages'
import { Footer, NavBar } from './components'

function App() {

  return (
    <div className="min-h-screen font-kollektif flex flex-col text-dead bg-alive">
      <NavBar />
      <div className='flex-1'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<p className='grid place-content-center min-h-page'>Where are you going? also, 404_notfound</p>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App

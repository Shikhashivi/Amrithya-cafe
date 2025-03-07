import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Reservation from './Components/Reservation'
import About from './Components/About'
import Contact from './Components/Contact'
import Menu from './Components/Menu'
import ReservationDetails from './Components/ReservationDetails'
import Private from './Components/Private'


const App = () => {
  return (
    <div className="">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/events' element={<Private/>}/>
     
      <Route path='/reservation' element={<Reservation/>}/>
      <Route path='/reservation-details' element={<ReservationDetails/>}/>


      
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
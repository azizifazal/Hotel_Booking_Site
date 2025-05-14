import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomsDetails from './pages/RoomsDetails'
import Mybookings from './pages/Mybookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/hotelOwner/Layout'
import DashBoard from './pages/hotelOwner/DashBoard'
import AddRoom from './pages/hotelOwner/AddRoom'
import ListRoom from './pages/hotelOwner/ListRoom'



const App = () => {
  const isOwnerpath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerpath && <Navbar/>}
      {false && <HotelReg/>}
      <div className=''></div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rooms' element={<AllRooms/>}/>
      <Route path='/rooms/:id' element={<RoomsDetails/>}/>
      <Route path='/my-bookings' element={<Mybookings/>}/>
      <Route path='/owner' element={<Layout />}>
       <Route index element={<DashBoard />} />
       <Route  path='add-room' element={<AddRoom/>} />
       <Route  path='list-room' element={<ListRoom/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
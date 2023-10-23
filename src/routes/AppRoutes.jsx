import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../container/Home'
import Profile from '../container/Profile'

function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='profile' element={<Profile/>}></Route>
        </Routes>
    </div>
  )
}

export default AppRoutes
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

export default function Layout() {
  return (
    <div>
     <NavBar/>
      <Outlet></Outlet>
      footer
    </div>
  )
}

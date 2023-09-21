import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.tsx'


export default function Layout() {
  // localStorage.removeItem('userData');

  return (
    <>
    <Outlet />
    </>
  )
}

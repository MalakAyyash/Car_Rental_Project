import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  // localStorage.removeItem('userData');

  return (
    <>
    <Outlet />
    </>
  )
}

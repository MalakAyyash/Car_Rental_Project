import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage.tsx'

export default function Layout() {
  return (
    <>
    <Outlet />
    </>
  )
}

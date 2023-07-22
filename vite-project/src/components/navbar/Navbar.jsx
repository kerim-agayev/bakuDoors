import React from 'react'
import { Outlet } from "react-router-dom"
function Navbar() {
  return (
    <>
      <div>Navbar</div>
      <main>
        <Outlet/>
      </main>
    
    </>
  
  )
}

export default Navbar
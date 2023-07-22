import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
function AutoFotoselDonerQapi() {
  return (
    <>
    <div className="help-layout">

      <h2>krm</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</p>

      <nav>
        <NavLink to="autodoner">autoqaraj</NavLink>
        <NavLink to="autofotosel">autofotosel</NavLink>
        <NavLink to="hermetikxestexanaqapi">hermetikxestexanaqapi</NavLink>
        <NavLink to="autoyarimdaireviqapi">autoyarimdaireviqapi</NavLink>
      </nav>

      <Outlet />

    </div>
  </>
  )
}

export default AutoFotoselDonerQapi
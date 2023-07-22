import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
function AutoJaluzQapi() {
  return (
    <>
      <div className="help-layout">

        <h2>krm</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</p>

        <nav>
          <NavLink to="autojaluz">autojaluz</NavLink>
          <NavLink to="autojaluzdarvaza">autojaluzdarvaza</NavLink>
        </nav>

        <Outlet />

      </div>
    </>
  )
}

export default AutoJaluzQapi
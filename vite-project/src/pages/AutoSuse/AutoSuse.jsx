import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
function AutoSuse() {
  return (
    <>
      <div className="margin-x">
        <div className="container">



          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Panorama Sistemi</h5>

                  <NavLink to='panoramasistem' className="tdeco btn btn-primary hover">Panorama</NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Panoramanin Ustunlukleri</h5>

                  <NavLink to='panoramaustunluk' className="tdeco  btn btn-primary hover">Panoramanin ustunlukleri</NavLink>
                </div>
              </div>
            </div>
          </div>







          <Outlet />

        </div>
      </div>

    </>


  )
}

export default AutoSuse
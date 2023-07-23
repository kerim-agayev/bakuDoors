import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
function AutoSeksiyonalQapi() {
  return (
    <>
         <div className="margin-x">
        <div className="container">



          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Avtomatik Qaraj Qapilari</h5>

                  <NavLink to='autoqaraj' className="tdeco btn btn-primary hover">Qaraj</NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Avtomatik Senaye Qapilari</h5>

                  <NavLink to='autosenaye' className="tdeco  btn btn-primary hover">Senaye</NavLink>
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

export default AutoSeksiyonalQapi
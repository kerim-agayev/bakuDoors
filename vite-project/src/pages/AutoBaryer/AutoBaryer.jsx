import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
function AutoBaryer() {
  return (
    <>
         <div className="margin-x">
        <div className="container">



          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Slaqbaumlar</h5>

                  <NavLink to='slaqbaum' className="tdeco btn btn-primary hover">Slaqbaum</NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Vesor(parking ucun)</h5>

                  <NavLink to='vesor' className="tdeco  btn btn-primary hover">Vesor</NavLink>
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

export default AutoBaryer
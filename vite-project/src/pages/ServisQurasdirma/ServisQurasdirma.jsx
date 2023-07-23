import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
function ServisQurasdirma() {
  return (
    <>
     <div className="margin-x">
        <div className="container">



          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Qapilarin Servisi ve Qurasdirilmasi</h5>

                  <NavLink to='qapiservisqurasdirma' className="tdeco btn btn-primary hover">Qapi servisi</NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Slaqbaumlarin Servisi ve Qurasdirilmasi</h5>

                  <NavLink to='slaqbaumservisqurasdirma' className="tdeco  btn btn-primary hover">Slaqbaum servisi</NavLink>
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

export default ServisQurasdirma
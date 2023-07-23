import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import Sidebar from '../../components/sidebar/Sidebar'


function SaunaBesetka() {
  return (
    <>
      <div className="margin-x">
        <div className="container">



          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Sauna Tikintisi</h5>

                  <NavLink to='sauna' className="tdeco btn btn-primary hover">Sauna</NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Besetka Tikintisi</h5>

                  <NavLink to='besetka' className="tdeco  btn btn-primary hover">Besetka</NavLink>
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

export default SaunaBesetka
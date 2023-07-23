import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
function AutoJaluzQapi() {
  return (
    <>
       <div className="margin-x">
        <div className="container">



          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Avtomatik Jaluz Sistemleri</h5>

                  <NavLink to='autojaluz' className="tdeco btn btn-primary hover">Jaluz sistemleri</NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Avtomatik Jaluz Sistemleri Darvaza</h5>

                  <NavLink to='autojaluzdarvaza' className="tdeco  btn btn-primary hover">Jaluz sistemleri - darvaza</NavLink>
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

export default AutoJaluzQapi
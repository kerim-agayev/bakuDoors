import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
function ServisQurasdirma() {

  const a = "Qapilarin Servisi ve Qurasdirilmasi"
  const b = "Slaqbaumlarin Servisi ve Qurasdirilmasi"
const aLink = 'qapiservisqurasdirma'
const bLink = 'slaqbaumservisqurasdirma'


  const text = {
    a: a,
    b: b,
  };
  const link = {
    aLink: aLink,
    bLink: bLink,
  };




  return (
    <>
     {/* <div className="margin-x">
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
      </div> */}
      <div className="content-container"> {/* Wrap both SidebarMain and Outlet */}
      <SidebarMain text={text} link = {link} />
      <main>
        <Outlet />
      </main>
    </div>
  </>
  )
}

export default ServisQurasdirma
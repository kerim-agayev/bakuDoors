import React from 'react'
import { NavLink, Outlet } from "react-router-dom"

import SidebarMain from '../../components/sidebar/SidebarMain'


function SaunaBesetka() {
  const a = "Sauna Tikintisi"
  const b = "Besetka Tikintisi"
const aLink = 'sauna'
const bLink = 'besetka'


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

export default SaunaBesetka
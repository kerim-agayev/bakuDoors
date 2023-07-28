import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
function AutoFotoselDonerQapi() {



  const a = "AVTOMATİK FOTOSEL QAPILAR"
  const b = "Avtomatik Dönər Qapılar"
  const c = "YARIM DAİRƏVİ FOTOSEL QAPILAR"
  const d = "HERMETİK XƏSTƏXANA QAPILARI"
const aLink = 'autofotosel'
const bLink = 'autodoner'
const cLink = 'autoyarimdaireviqapi'
const dLink = 'hermetikxestexanaqapi'

  const text = {
    a: a,
    b: b,
    c:c,
    d:d
  };
  const link = {
    aLink: aLink,
    bLink: bLink,
    cLink:cLink,
    dLink:dLink
  };

  return (
    <>
     {/* <div className="margin-x">
        <div className="container">



          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">AVTOMATİK FOTOSEL QAPILAR</h5>

                  <NavLink to='autofotosel' className="tdeco btn btn-primary hover">Fotosel qapilar</NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Avtomatik Dönər Qapılar</h5>

                  <NavLink to='autodoner' className="tdeco  btn btn-primary hover">Doner qapilar</NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">YARIM DAİRƏVİ FOTOSEL QAPILAR</h5>

                  <NavLink to='autoyarimdaireviqapi' className="tdeco  btn btn-primary hover">fotosel qapilar</NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">HERMETİK XƏSTƏXANA QAPILARI</h5>

                  <NavLink to='hermetikxestexanaqapi' className="tdeco  btn btn-primary hover">Xestexana qapilari</NavLink>
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

export default AutoFotoselDonerQapi
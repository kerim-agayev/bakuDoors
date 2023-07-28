import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarMain from '../../components/sidebar/SidebarMain';

function AutoBaryer() {


  const a = "Slaqbaum"
  const b = "Vesor"
const aLink = 'slaqbaum'
const bLink = 'vesor'


  const text = {
    a: a,
    b: b,
  };
  const link = {
    aLink: aLink,
    bLink: bLink,
  };




  return (
    <div className="content-container"> {/* Wrap both SidebarMain and Outlet */}
      <SidebarMain text={text} link = {link} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AutoBaryer;


















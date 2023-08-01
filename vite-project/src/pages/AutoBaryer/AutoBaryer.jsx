import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarMain from '../../components/sidebar/SidebarMain';
import { useTranslation } from 'react-i18next';
function AutoBaryer() {
  const {t} = useTranslation()

  const a = t('barrier')
  const b = t('vesor')
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


















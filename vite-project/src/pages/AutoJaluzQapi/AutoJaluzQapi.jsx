import React from 'react'
import {  Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
import { useTranslation } from 'react-i18next';
function AutoJaluzQapi() {
  const {t,i18n} = useTranslation()

  const a = t('blind')
  const b = t('works')
const aLink = 'autojaluz'
const bLink = 'autojaluzdarvaza'


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
         <div className="content-container"> {/* Wrap both SidebarMain and Outlet */}
      <SidebarMain text={text} link = {link} />
      <main>
        <Outlet />
      </main>
      </div>
    </>
  )
}

export default AutoJaluzQapi
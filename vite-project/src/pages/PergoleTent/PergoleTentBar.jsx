import React from 'react'
import {  Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
import { useTranslation } from 'react-i18next';


function PergoleTentBar() {
  const {t} = useTranslation()

    const a = t('epergole')
    const b = t('works')
    const aLink = 'pergoletentmain'
    const bLink = 'pergoletentourworks'
  
  
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
        <SidebarMain text={text} link={link} />
        <main><Outlet /></main>
      </div>
    
    
    
    </>



   
  )
}

export default PergoleTentBar
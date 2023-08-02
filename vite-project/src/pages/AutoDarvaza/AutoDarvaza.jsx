
import {  Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
import { useTranslation } from 'react-i18next';
function AutoDarvaza() {
  const {t} = useTranslation()

  const a = t('agates')
  const b = t('bgates')
  const c = t('cgates')
  const d = t('dgates')
const aLink = 'doxsanderecedarvaza'
const bLink = 'yanasurusendarvaza'
const cLink = 'xacilandarvaza'
const dLink = 'avtomatikdemirdarvaza'

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


    <div className="content-container"> {/* Wrap both SidebarMain and Outlet */}
      <SidebarMain text={text} link = {link} />
      <main>
        <Outlet />
      </main>
    </div>
  </>
  )
}

export default AutoDarvaza

import { Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
import { useTranslation } from 'react-i18next';
function AutoSeksiyonalQapi() {
  const {t} = useTranslation()



  const a = t('garage')
  const b = t('industrial')
const aLink = 'autoqaraj'
const bLink = 'autosenaye'


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
      <main><Outlet/></main>
      </div>
    </>
  )
}

export default AutoSeksiyonalQapi
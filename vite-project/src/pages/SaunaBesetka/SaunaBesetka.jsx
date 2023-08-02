
import { Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
import { useTranslation } from 'react-i18next';

function SaunaBesetka() {
  const {t} = useTranslation()
  const a = t('saunatik')
  const b = t('pavilion')
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
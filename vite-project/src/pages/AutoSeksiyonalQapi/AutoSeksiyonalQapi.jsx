import BakudoorSeksional from '/autoSenayeQapi/autoSenayeQapi5.jpg'
import BakudoorSeksional2 from '/autoQarajQapilari/autoQarajQapi9.jpg'
import { useTranslation } from 'react-i18next';
import Main from "../../components/main/Main";
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
  const imgPhoto = {
    img1: BakudoorSeksional2,
    img2: BakudoorSeksional,
  };


  return (
    <>
  
     
      <Main text={text} link = {link} imgPhoto={imgPhoto}/>
    </>
  )
}

export default AutoSeksiyonalQapi
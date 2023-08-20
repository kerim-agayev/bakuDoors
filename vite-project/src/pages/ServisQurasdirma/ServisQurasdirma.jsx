import SenayeServis from '/senayeservis.jpg'
import Servis from '/servis.jpg'
import { useTranslation } from 'react-i18next';
import Main from "../../components/main/Main";


function ServisQurasdirma() {
  const {t} = useTranslation()
  const a = t('doorservice')
  const b = t('barrierservice')
const aLink = 'qapiservisqurasdirma'
const bLink = 'slaqbaumservisqurasdirma'


  const text = {
    a: a,
    b: b,
  };
  const link = {
    aLink: aLink,
    bLink: bLink,
  };
  const imgPhoto = {
    img1: SenayeServis,
    img2: Servis,
  };



  return (
    <>
   
    <Main text={text} link = {link} imgPhoto={imgPhoto}/>
  </>
  )
}

export default ServisQurasdirma
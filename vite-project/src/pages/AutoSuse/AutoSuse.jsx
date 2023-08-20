import Panorama3 from '/panorama/panorama14.jpg'
import Panorama8 from '/panorama/panorama10.jpg'
import { useTranslation } from 'react-i18next';
import Main from "../../components/main/Main";

function AutoSuse() {

  const {t} = useTranslation()
  const a = t('pansystem')
  const b = t('works')
  const aLink = 'panoramasistem'
  const bLink = 'panoramaustunluk'


  const text = {
    a: a,
    b: b,
  };
  const link = {
    aLink: aLink,
    bLink: bLink,
  };
  const imgPhoto = {
    img1: Panorama3,
    img2: Panorama8,
  };

  return (
    <>
     

    
      <Main text={text} link = {link} imgPhoto={imgPhoto}/>
    </>


  )
}

export default AutoSuse
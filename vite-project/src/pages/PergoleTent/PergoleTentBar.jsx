import Pergole2 from '/pergoleTent/pergoleTent2.jpg'
import Pergole3 from '/pergoleTent/pergoleTent3.jpg'
import { useTranslation } from 'react-i18next';
import Main from "../../components/main/Main";


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


    const imgPhoto = {
      img1: Pergole2,
      img2: Pergole3,
    };


  return (
    <>
    
   
      <Main text={text} link = {link} imgPhoto={imgPhoto}/>
    
    
    </>



   
  )
}

export default PergoleTentBar
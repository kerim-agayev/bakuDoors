import Slaqbaumlar2 from "/slaqbaumlar2.jpg";
import VesorPhoto from '/vesor.jpg'
import { useTranslation } from 'react-i18next';
import Main from '../../components/main/Main';
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
  const imgPhoto = {
    img1: Slaqbaumlar2,
    img2: VesorPhoto,
  };



  return (

    <>
<Main text={text} link = {link} imgPhoto={imgPhoto}/>
    </>
  );
}

export default AutoBaryer;


















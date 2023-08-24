import JaluzSistemleri from '/autoJaluzQapilar/autoJaluzQapi10.jpg'
import JaluzSistemleri2 from '/autoJaluzQapilar/autoJaluzQapi7.jpg'
import { useTranslation } from 'react-i18next';
import Main from "../../components/main/Main";
function AutoJaluzQapi() {
  const {t} = useTranslation()

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
  const imgPhoto = {
    img1: JaluzSistemleri,
    img2: JaluzSistemleri2,
  };
  return (
    <>
    
      <Main text={text} link = {link} imgPhoto={imgPhoto}/>
    </>
  )
}

export default AutoJaluzQapi
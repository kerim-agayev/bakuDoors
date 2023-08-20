import YuklemeRampasiPhoto from '/yuklemerampasi.jpg'
import YuklemeRampasiPhoto4 from '/ramp4.jpg'
import { useTranslation } from 'react-i18next';
import Main from "../../components/main/Main"
function YuklemeRampasiBar() {

  const {t} = useTranslation()
    const a = t('j')
    const b = t('works')
  const aLink = 'yuklememain'
  const bLink = 'yuklemeworks'
  
  
    const text = {
      a: a,
      b: b,
    };
    const link = {
      aLink: aLink,
      bLink: bLink,
    };
    const imgPhoto = {
      img1: YuklemeRampasiPhoto,
      img2: YuklemeRampasiPhoto4,
    };
  return (
    <>


<Main text={text} link = {link} imgPhoto={imgPhoto}/>

    </>
  )
}

export default YuklemeRampasiBar
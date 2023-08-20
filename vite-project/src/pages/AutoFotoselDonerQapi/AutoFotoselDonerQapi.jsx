import AutoDonerPhoto from '/revolving.jpg'
import AutoFotosel1 from "/fotoselQapi/fotoselQapi8.jpg";
import YarimDairevi from "/yarimdairevi.png";
import Hermetic2 from '/hermetic2.png'
import { useTranslation } from 'react-i18next';
import Main from "../../components/main/Main";



function AutoFotoselDonerQapi() {
  const {t} = useTranslation()


  const a = t('photocell')
  const b = t('revolving')
  const c = t('circular')
  const d = t('hermetic')
const aLink = 'autofotosel'
const bLink = 'autodoner'
const cLink = 'autoyarimdaireviqapi'
const dLink = 'hermetikxestexanaqapi'

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
  const imgPhoto = {
    img1:  AutoFotosel1 ,
    img2: AutoDonerPhoto,
    img3: YarimDairevi,
    img4:  Hermetic2
  };

  return (
    <>
    
 

<Main text={text} link = {link} imgPhoto={imgPhoto}/>

  </>
  )
}

export default AutoFotoselDonerQapi
import DemirDarvaza from '/demirDarvazalar/demirDarvazalar4.jpg'
import DoxsanAcilanDarvaza from '/doxsanacilandarvaza.jpg'
import YanaSurusenQapi from '/yanasurusenqapi.jpg'
import YanaSurusenQapi3 from '/yanaSuruserekAcilanDarvaza/yanaAcilanDarvaza3.jpg'
import { useTranslation } from 'react-i18next';
import Main from '../../components/main/Main'
function AutoDarvaza() {
  const {t} = useTranslation()

  const a = t('agates')
  const b = t('bgates')
  const c = t('cgates')
  const d = t('dgates')
const aLink = 'doxsanderecedarvaza'
const bLink = 'yanasurusendarvaza'
const cLink = 'xacilandarvaza'
const dLink = 'avtomatikdemirdarvaza'

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
    img1:  DoxsanAcilanDarvaza ,
    img2: YanaSurusenQapi,
    img3: YanaSurusenQapi3,
    img4:  DemirDarvaza
  };

  return (
    <>

    <Main text={text} link = {link} imgPhoto={imgPhoto}/>
  </>
  )
}

export default AutoDarvaza
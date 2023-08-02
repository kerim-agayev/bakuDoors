
import ProductTitle from "./ProductTitle";
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next';
function About() {
  const {t} = useTranslation()
  return (
    <>
    <motion.div className="motion"
    
    initial={{opacity:0 , scale:0.5}}
    animate={{opacity:1, scale:1}}
    transition={{delay:0.2,duration:1}}
  
    
    
    >
    <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <ProductTitle title={t('about')} />
          </div>
          <ul className="ulAbout col-12 mx-2 bg-primary text-white rounded p-3">
          <li className="liAbout"><h5> {t('aa')}</h5></li>
            <li className="liAbout"><h5>{t('ba')}</h5></li>

            <li className="liAbout"><h5>{t('ca')}</h5></li>

            <li className="liAbout"><h5>{t('da')}</h5></li>

            <li className="liAbout"><h5> {t('ea')}</h5></li>

            <li className="liAbout"><h5>{t('fa')}</h5></li>

            <li className="liAbout"><h5>{t('ga')}</h5></li>

            <li className="liAbout"><h5> {t('ha')}</h5></li>
            <li className="liAbout"><h5>{t('ia')}</h5></li>
            <li className="liAbout"><h5>{t('ja')}</h5></li>
          </ul>
        </div>
      </div>


    </motion.div>
    
    </>
  );
}

export default About;
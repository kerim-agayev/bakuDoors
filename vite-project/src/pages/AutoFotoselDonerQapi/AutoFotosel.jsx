import  { useEffect, useRef } from 'react'
import AutoFotoselEsas from '../../assets/autofotoselesas.jpg'
import AutoFotosel1 from '../../assets/autofotosel1.jpg'
import Data from "../../datas/Data.json";
import { motion , useInView, useAnimation} from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
import { useTranslation } from 'react-i18next';
function AutoFotosel() {
  const {t} = useTranslation()
  const ref = useRef(null)

  const isinview = useInView(ref)

  const maincontrols = useAnimation()
  const ref2 = useRef(null)

  const isinview2 = useInView(ref2)

  const maincontrols2 = useAnimation()
  useEffect(() => {


    if (isinview) {
      maincontrols.start('visible')

    }
    if (isinview2) {
      maincontrols2.start('visible')

    }
    
  }, [isinview, isinview2])
  const { fotosel } = Data

  const container = {
    visible: {
      transition: {
        //delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }

  }
  const item = {

    visible: {
      opacity: 1,
      translateY: 0
    },
    hidden: {
      opacity: 0,
      translateY: 20
    }


  }
  return (

    <>
    
    <div className='container mt-5 ' >
      <div className='row'>
        <div className='col-12'>
          <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
          >
            <img src={AutoFotoselEsas} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">{t('photocell')}</h6>
            </div>
          </motion.div>
          <motion.div className="card mt-5 mb-5 shadow-lg all-card m-auto-all"
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
          
          >
            <div className="card-body">
              <p>{t('fotocell1')}</p>
              <p>{t('fotocell2')}</p>
            </div>
          </motion.div>





        </div>



        <div className='col-8  d-none d-md-block '>
          <motion.div className="card shadow-lg mb-5" style={{ width: '50rem' }}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
          >
            <img src={AutoFotosel1} className="card-img-top" alt="..." />

          </motion.div>

        </div>

      </div>
      <motion.div className="row mt-5 "
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
      
      
      >
        <div className="col-md-6 mt-5 shadow-lg m-auto">
          <ul className="list-group">
            <li className="list-group-item">{t('fotocell3')}</li>
            <li className="list-group-item">{t('fotocell4')}</li>
            <li className="list-group-item">{t('fotocell5')}</li>
            <li className="list-group-item">{t('fotocell6')}</li>
            <li className="list-group-item">{t('fotocell7')}</li>
            <li className="list-group-item">{t('fotocell8')}</li>
            <li className="list-group-item">{t('fotocell9')}</li>
            <li className="list-group-item">{t('fotocell10')}</li>
            <li className="list-group-item">{t('fotocell11')}</li>
            <li className="list-group-item">{t('fotocell12')}</li>
            <li className="list-group-item">{t('fotocell13')}</li>
            <li className="list-group-item">{t('fotocell14')}</li>
            <li className="list-group-item">{t('fotocell15')}</li>
            <li className="list-group-item">{t('fotocell16')}</li>
          </ul>
        </div>

      </motion.div>



    </div>


    <motion.div
    ref={ref2}
    variants={{
      hidden: { opacity: 0, translateX: -300 },
      visible: { opacity: 1, translateX: 0 }

    }}
    initial='hidden'
    animate={maincontrols2}
    transition={{ duration: 1 }}
        className='all-ourworks mt-5 m-auto'
      >

        <ProductTitle title={t('works2')} />
      </motion.div>



      <motion.div ref={ref} className="container mt-5"
        initial='hidden'
        animate={maincontrols}
        variants={container}


      >
        <div className="row all-map-container-fotosel">


          {
            fotosel.map((foto) => (
              <motion.div ref={ref} key={foto.id} className="col-4 col-xl-3  shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2" >
                  <img src={foto.imgUrl} className="card-img-top objectFit responsiveImg rounded" alt="..." />

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>
    </>
  
  )
}

export default AutoFotosel
import React, { useEffect, useRef } from 'react'
import JaluzSistemleri from '../../assets/jaluzsistemleri.jpg'
import Data from "../../datas/Data.json";
import { motion , useInView, useAnimation} from 'framer-motion'
import { useTranslation } from 'react-i18next';
function AutoJaluz() {
  const {t} = useTranslation()
  const ref = useRef(null)

  const isinview = useInView(ref)

  const maincontrols = useAnimation()

  useEffect(() => {

 
    if (isinview) {
      maincontrols.start('visible')

    }
   
    
  }, [isinview])

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
  const { autojaluzqapidetay } = Data
  
  return (

    <>
    
  
      <div className='container mt-5' >
        <div className='row'>

          <div className='col-12'>
            <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={JaluzSistemleri} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">{t('blind')}</h6>
              </div>
            </motion.div>
            <motion.div className="card mt-5 shadow-lg all-card m-auto-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="card-body">
                <p>{t('jaluz1')}</p>
                <p> {t('jaluz2')}</p>
                <p>{t('jaluz3')}</p>
                <p>{t('jaluz4')}</p>
              </div>
            </motion.div>
          </div>



        </div>



      </div>
      

     
    <motion.div ref={ref} className="container mt-5"
        initial='hidden'
        animate={maincontrols}
        variants={container}


      >
        <div className="row m-auto">


          {
            autojaluzqapidetay.map((auto) => (
              <motion.div ref={ref} key={auto.id} className="col-4 col-xl-3  shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2 ">
                  <img src={auto.imgUrl} className="card-img-top objectFit responsiveImg rounded" alt="..." />

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>
    </>
  



  )
}

export default AutoJaluz
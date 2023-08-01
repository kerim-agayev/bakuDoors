import React from 'react'
import CamBalkon from '../../assets/cambalkon.jpg'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';


function PanoramaSistem() {

  const {t} = useTranslation()



  return (
    <div className='container mt-5' >
      <div className='row'>
        <div className='col-12'>
          <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}

          >
            <img src={CamBalkon} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">{t('pansystem')}</h6>
            </div>
          </motion.div>


          <motion.div className="card mt-5 shadow-lg  all-card m-auto-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}


          >
            <div className="card-body">
              <h3>PANORAMA</h3>
              <p>{t('panorama1')}</p>
              <p>{t('panorama2')}</p>
              <p>{t('panorama3')}</p>
              <p>{t('panorama4')}</p>
              <p>{t('panorama5')}</p>
            </div>
          </motion.div>


        </div>



      </div>



    </div>
  )
}

export default PanoramaSistem
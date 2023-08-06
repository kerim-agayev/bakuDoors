
import AutoFotoselEsas from '/autofotoselesas.jpg'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';


function HermetikXestexanaQapi() {
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
            <img src={AutoFotoselEsas} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">{t('hermetic')}</h6>
            </div>
          </motion.div>
          <motion.div className="card mt-5 shadow-lg all-card m-auto-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          
          
          >
            <div className="card-body">
              <h3> {t('hermetic1')} </h3>
              <p>{t('hermetic2')} </p>
            </div>
          </motion.div>



        </div>



      </div>



    </div>
  )
}

export default HermetikXestexanaQapi
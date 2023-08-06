
import Servis from '/servis.jpg'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';


function SlaqbaumServisQurasdirma() {
    const {t} = useTranslation()
  return (
    <div>

      <div className='container mt-5 ' >
        <div className='row'>
          <div className='col-12'>
            <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}


            >
              <img src={Servis} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">{t('barrierservice')} </h6>
              </div>
            </motion.div>




            <motion.div className="card shadow-lg mt-5 m-auto-all all-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}


            >
              <div className="card-body ">

                <div className="card" >
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{t('serviceslaqbaum1')}</li>
                    <li className="list-group-item">{t('serviceslaqbaum2')}</li>
                    <li className="list-group-item">{t('serviceslaqbaum3')}</li>
                    <li className="list-group-item">{t('serviceslaqbaum4')}</li>
                  </ul>
                </div>




             
              
          
              </div>
            </motion.div>


          </div>



        </div>
      </div>


    </div>
  )
}

export default SlaqbaumServisQurasdirma
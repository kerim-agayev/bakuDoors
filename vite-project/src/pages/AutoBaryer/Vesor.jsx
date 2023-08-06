
import VesorPhoto from '/vesor.jpg'
import { motion} from 'framer-motion'
import { useTranslation } from 'react-i18next';


function Vesor() {
  const {t} = useTranslation()
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
              <img src={VesorPhoto} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">{t('vesor1')} </h6>
              </div>
            </motion.div>




            <motion.div className="card shadow-lg mt-5 m-auto-all all-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}


            >
              <div className="card-body ">
           
                <p>{t('barrier3')}</p>
                <p>info@bakudoors.com - www.bakudoors.com</p>
              </div>
            </motion.div>


          </div>



        </div>
      </div>
    
    </>

  )
}

export default Vesor
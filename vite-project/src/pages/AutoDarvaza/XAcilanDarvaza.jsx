
import AutoDarvazalar from '/autodarvazalar.jpg'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import {AiOutlineRight} from 'react-icons/ai'
function XAcilanDarvaza() {
  const {t} = useTranslation()
  return (
    
    <div className='container mt-5' >
      <div className='row mt-5 mb-5 vheight'>
        <div className='col-12'>
          <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          
          
          >
            <img src={AutoDarvazalar} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">{t('cgates')}</h6>
            </div>
          </motion.div>



          <motion.div className="card mt-5 mb-5 shadow-lg all-card m-auto-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          
          
          >
            <div className="card-body rounded bg-info p-3 ">
              <h3 className='fs-darvazamain text-white'>{t('gates1')}</h3>
              <p className="card-text fs-darvaza"><AiOutlineRight size={20}/> {t('gates2')} </p>
            
              <p className="card-text fs-darvaza"><AiOutlineRight size={20}/>  {t('gates5')}</p>
              <p className="card-text fs-darvaza"><AiOutlineRight size={20}/>  {t('gates4')}</p>
              <p className="card-text fs-darvaza"><AiOutlineRight size={20}/>  {t('gates3')}</p>
            </div>
          </motion.div>





        </div>



      </div>
 

 <hr />
    </div>
  )
}

export default XAcilanDarvaza
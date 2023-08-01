import React from 'react'
import AutoDarvazalar from '../../assets/autodarvazalar.jpg'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
function XAcilanDarvaza() {
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
            <img src={AutoDarvazalar} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">AVTOMATİK DARVAZALAR</h6>
            </div>
          </motion.div>



          <motion.div className="card mt-5 mb-5 shadow-lg all-card m-auto-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          
          
          >
            <div className="card-body">
              <h3 className='mt-5'>Baku DOORS – Avtomatik qapılar şirkəti avtomatik darvazalarının 4 növünü təqdim edir.</h3>
              <p className="card-text">Mövcud darvazaların avtomatlaşdırılması – </p>
              <p className="card-text">Sendvic paneldən 90 dərəcə açılan avtomatik darvazalar.</p>
              <p className="card-text">Sendvic paneldən yana sürüçən avtomatik darvazalar.</p>
              <p className="card-text">Amerikan tipli X açılan avtomatik darvazalar.</p>
            </div>
          </motion.div>





        </div>



      </div>
 


    </div>
  )
}

export default XAcilanDarvaza
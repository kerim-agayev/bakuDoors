import React from 'react'
import Pergole from '../../assets/pergole.jpg'
import { motion } from 'framer-motion'
function PergoleTent() {
  return (
    <div className='container mt-md-5' >
      <div className='row'>
        <div className='col-8'>
          <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
          
          
          >
            <img src={Pergole} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">PERGOLE VƏ TENT SİSTEMLƏRİ</h6>
            </div>
          </motion.div>


          <motion.div className="card shadow-lg mt-5 all-card m-auto-all"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
          
          
          >
            <div className="card-body">
              <p>Pergola Sistemlərimiz  müxtəlif seriyaları ilə xarici məkanların genişləndirilməsinə imkan yaradır və il boyu istifadə edə biləcəyiniz relsli tent sistemidir. İncə quruluş və müasir dizayna sahib açılıb-bağlanan tavan sistemi günəş şüasından, yağışdan və qardan qoruyur.</p>
            </div>
          </motion.div>

        </div>



      </div>



    </div>
  )
}

export default PergoleTent
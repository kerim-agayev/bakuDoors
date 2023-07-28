import React from 'react'
import AutoFotoselEsas from '../../assets/autofotoselesas.jpg'
import { motion } from 'framer-motion'
function HermetikXestexanaQapi() {
  return (
    <div className='container mt-md-5' >
      <div className='row'>
        <div className='col-8'>
          <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          
          
          >
            <img src={AutoFotoselEsas} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">HERMETİK XƏSTƏXANA QAPILARI</h6>
            </div>
          </motion.div>
          <motion.div className="card mt-5 shadow-lg all-card m-auto-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          
          
          >
            <div className="card-body">
              <h3> Xəstəxana Qapıları </h3>
              <p>Xəstəxanalarda əməliyyat, reanimasiya,xüsusi xidmət sahələrində,

                tam sızdırmazlıq tələb etməyən hallarda xüsusi laminant

                və ya polad materialdan emal edilən yana sürüşən və

                ilgəkli qapı qanadları və arzu edilən açma bağlama

                sistemli (barmaq izi,kart, şifrə, radar, buton və s). qapı tipləridir. </p>
            </div>
          </motion.div>



        </div>



      </div>



    </div>
  )
}

export default HermetikXestexanaQapi
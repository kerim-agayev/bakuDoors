import React from 'react'


import YarimDairevi from '../../assets/yarimdairevi.png'
import { motion } from 'framer-motion'
function AutoYarimDaireviQapi() {
  return (
    <div className='container mt-5' >
      <div className='row'>

        <div className='col-12'>
          <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
          
          >
            <img src={YarimDairevi} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">YARIM DAİRƏVİ FOTOSEL QAPILAR</h6>
            </div>
          </motion.div>

          <motion.div className="card shadow-lg mt-5 mb-5 all-card m-auto-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
          
          
          >
            <div className="card-body">
            <p>YARIM DAİRƏVİ FOTOSEL QAPILAR- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque accusamus, ullam sit optio in nostrum voluptatibus eum enim nulla quisquam, facilis amet quibusdam consequuntur dolores, expedita numquam laudantium saepe.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, corrupti?.</p>
            </div>
          </motion.div>


       
        </div>



    

      </div>
   


    </div>
  )
}

export default AutoYarimDaireviQapi
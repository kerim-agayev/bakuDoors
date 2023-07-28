import React from 'react'
import  Pavillion from '../../assets/pavillion.jpg'
import { motion } from 'framer-motion'
function Besetka() {
  return (
    <div className='container mt-md-5' >
      <div className='row'>
        <div className='col-8'>
          <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
          >
            <img src={Pavillion} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">Besetka Tikintisi</h6>
            </div>
          </motion.div>

          <motion.div className="card mt-5 shadow-lg all-card m-auto-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
          >
            <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellendus quidem ullam cum et, enim culpa laudantium possimus optio iste, delectus consequatur dolorum placeat vitae itaque quam dolorem esse nostrum eius recusandae. Ipsum, aliquid. Adipisci, qui saepe doloribus dolor possimus voluptas quibusdam voluptatibus consequatur a blanditiis molestias. Mollitia, perspiciatis molestiae? </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem pariatur vel cumque maxime unde id assumenda natus perspiciatis dolores tempore. </p>
            </div>
          </motion.div>



      
        </div>



      </div>



    </div>
  )
}

export default Besetka
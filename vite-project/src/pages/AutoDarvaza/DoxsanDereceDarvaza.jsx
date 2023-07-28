import React from 'react'
import Data from "../../datas/Data.json";
import DoxsanAcilanDarvaza from '/doxsanacilandarvaza.jpg'
import { motion } from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
function DoxsanDereceDarvaza() {
  const { doxsandarvaza } = Data

  const container = {
    visible: {
      transition: {
        //delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }

  }
  const item = {

    visible: {
      opacity: 1,
      translateY: 0
    },
    hidden: {
      opacity: 0,
      translateY: 20
    }


  }
  return (
    <>

<div className='container mt-md-5' >
        <div className='row'>

          <div className='col-8'>
            <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={DoxsanAcilanDarvaza} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">AVTOMATİK 90 DƏRƏCƏ AÇILAN DARVAZALAR</h6>
              </div>
            </motion.div>
            <motion.div className="card mt-5 shadow-lg all-card m-auto-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="card-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit fugit et, consequatur tempore illo dolorem corrupti obcaecati atque a, consectetur voluptatem earum. Omnis consequuntur consequatur culpa necessitatibus porro voluptas assumenda! </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, nihil. </p>
              </div>
            </motion.div>
          </div>



        </div>



      </div>



      
      <motion.div
        initial={{ opacity: 0, translateX: -300 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className='all-ourworks mt-5'
      >

        <ProductTitle title=' ŞİRKƏTİMİZİN GÖRDÜYÜ İŞLƏR' />
      </motion.div>



      <motion.div className="container mt-5"
        initial='hidden'
        animate='visible'
        variants={container}


      >
        <div className="row all-map-container-doxsan">


          {
            doxsandarvaza.map((darvaza) => (
              <motion.div key={darvaza.id} className="col-4 col-lg-3 shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2 all-map-card-demir" >
                  <img src={darvaza.imgUrl} className="card-img-top objectFit all-map-img-demir" alt="..." />

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>


    </>
  )
}

export default DoxsanDereceDarvaza
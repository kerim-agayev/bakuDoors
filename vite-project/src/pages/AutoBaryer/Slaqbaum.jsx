import React from 'react'
import Slaqbaumlar2 from '/slaqbaumlar2.jpg'
import { motion } from 'framer-motion'
import Data from "../../datas/Data.json";
import ProductTitle from '../mainPages/about/ProductTitle';
function Slaqbaum() {
  const { slaqbaum } = Data
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
        <div className='container mt-md-5 ' >
      <div className='row'>
        <div className='col-8'>
          <motion.div className="card shadow m-auto-all-slaqbaum" style={{ width: '18rem' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          
          
          >
            <img src={Slaqbaumlar2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">Slaqbaum Tikintisi </h6>
            </div>
          </motion.div>




          <motion.div className="card shadow-lg mt-5 m-auto-all-slaqbaum all-card-slaqbaum"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          
          
          >
            <div className="card-body ">
              <p>  Yeni əl işimizdən.</p>
              <p>--- işimiz keyfiyyətimizdir</p>
              <p>Əlaqə: 050 400 3355 - 055 633 2888 - 070 633 2888</p>
              <p>info@bakudoors.com - www.bakudoors.com</p>
            </div>
          </motion.div>


        </div>



      </div>



    </div>


    <motion.div
        initial={{ opacity: 0, translateX: -300 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className='all-ourworks-slaqbaum mt-5'
      >

        <ProductTitle title=' ŞİRKƏTİMİZİN GÖRDÜYÜ İŞLƏR' />
      </motion.div>



      <motion.div className="container mt-5 "
        initial='hidden'
        animate='visible'
        variants={container}


      >
        <div className="row all-map-container-slaqbaum">


          {
            slaqbaum.map((slaq) => (
              <motion.div key={slaq.id} className="col-4 col-lg-3 shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2 all-map-card-slaqbaum" >
                  <img src={slaq.imgUrl} className="card-img-top objectFit all-map-img-slaqbaum" alt="..." />

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>

    
    </>




  )
}

export default Slaqbaum
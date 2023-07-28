import React from 'react'
import { motion } from 'framer-motion'
import Data from "../../datas/Data.json";
import ProductTitle from '../mainPages/about/ProductTitle';
function AutoJaluzDarvaza() {
  const { autojaluzqapi } = Data

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
  <div className="container">
        <div className="row">
          <motion.div
            initial={{ opacity: 0, translateX: -300 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >

            <ProductTitle title=' ŞİRKƏTİMİZİN GÖRDÜYÜ İŞLƏR' />
          </motion.div>


        </div>
      </div>
      <motion.div className="container mt-5"
        initial='hidden'
        animate='visible'
        variants={container}


      >
        <div className="row">


          {
            autojaluzqapi.map((auto) => (
              <motion.div key={auto.id} className="col-3 shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-2" style={{ width: '19rem', height: '20rem' }}>
                  <img src={auto.imgUrl} className="card-img-top objectFit" alt="..." />

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>



    </>
  )
}

export default AutoJaluzDarvaza
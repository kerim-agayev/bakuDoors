import React from 'react'
import Data from "../../datas/Data.json";
import DemirDarvaza from '/demirdarvaza.jpg'
import { motion } from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
function AvtomatikDemirDarvaza() {
  const { demirdarvaza } = Data

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

<div className='container mt-5' >
        <div className='row'>

          <div className='col-8'>
            <motion.div className="card shadow" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={DemirDarvaza} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">DƏMİR DARVAZALAR</h6>
              </div>
            </motion.div>
            <motion.div class="card mt-5 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur molestiae quae obcaecati, numquam tempore qui deserunt nesciunt aliquid quas quasi laudantium corrupti, odio earum dolorem magnam exercitationem quaerat sunt! </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, cum! </p>
              </div>
            </motion.div>
          </div>



        </div>



      </div>



      
      <motion.div
        initial={{ opacity: 0, translateX: -300 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
      >

        <ProductTitle title=' ŞİRKƏTİMİZİN GÖRDÜYÜ İŞLƏR' />
      </motion.div>



      <motion.div className="container mt-5"
        initial='hidden'
        animate='visible'
        variants={container}


      >
        <div className="row">


          {
           demirdarvaza.map((darvaza) => (
              <motion.div key={darvaza.id} className="col-3 shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-2" style={{ width: '19rem', height: '20rem' }}>
                  <img src={darvaza.imgUrl} className="card-img-top objectFit" alt="..." />

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>



    </>
  )
}

export default AvtomatikDemirDarvaza
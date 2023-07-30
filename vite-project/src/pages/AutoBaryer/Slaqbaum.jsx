import React, { useEffect, useRef } from 'react'
import Slaqbaumlar2 from '../../assets/slaqbaumlar2.jpg'
import { motion , useInView, useAnimation} from 'framer-motion'
import Data from "../../datas/Data.json";
import ProductTitle from '../mainPages/about/ProductTitle';
function Slaqbaum() {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const isinview = useInView(ref)
  // const isinview2 = useInView(ref2)
  const maincontrols = useAnimation()
  // const maincontrols2 = useAnimation()
  useEffect(() => {

  
    if (isinview) {
      maincontrols.start('visible')

    }
   
    
  }, [isinview])


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
        <div className='container mt-5 ' >
      <div className='row'>
        <div className='col-12'>
          <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          
          
          >
            <img src={Slaqbaumlar2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">Slaqbaum Tikintisi </h6>
            </div>
          </motion.div>




          <motion.div className="card shadow-lg mt-5 m-auto-all all-card"
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
        className='all-ourworks mt-5 m-auto'
      >

        <ProductTitle title=' ŞİRKƏTİMİZİN GÖRDÜYÜ İŞLƏR' />
      </motion.div>



      <motion.div ref={ref} className="container mt-5 "
        initial='hidden'
        animate={maincontrols}
        variants={container}


      >
        <div className="row m-auto">


          {
            slaqbaum.map((slaq) => (
              <motion.div ref={ref} key={slaq.id} className="col-4 col-xl-3  shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2 " >
                  <img src={slaq.imgUrl} className="card-img-top objectFit responsiveImg" alt="..." />

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
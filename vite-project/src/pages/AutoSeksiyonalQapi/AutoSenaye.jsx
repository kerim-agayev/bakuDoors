import React, { useEffect, useRef } from 'react'
// import SenayeQapilariUst from '../../assets/senayeqapilariust.gif'
import SenayeQapilariAlt1 from '../../assets/senayeqapilarialt1.jpg'
import SenayeQapilariAlt2 from '../../assets/senayeqapilarialt2.jpg'
import BakuDoorSseksional from '../../assets/bakudoorsseksional.jpg'
import { motion, useInView, useAnimation } from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
import Data from "../../datas/Data.json";
import { useTranslation } from 'react-i18next';


function AutoSenaye() {
  const {t} = useTranslation()
  const ref = useRef(null)
  const ref2 = useRef(null)
  const isinview = useInView(ref)
  const isinview2 = useInView(ref2)
  const maincontrols = useAnimation()
  const maincontrols2 = useAnimation()
  useEffect(() => {


    if (isinview) {
      maincontrols.start('visible')

    }

    if (isinview2) {
      maincontrols2.start('visible')

    }


  }, [isinview, isinview2])
  const { autosenayeqapi } = Data
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
          <div className='col-12'>
            <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}


            >
              <img src={BakuDoorSseksional} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">{t('industrial')}</h6>
              </div>
            </motion.div>


            <motion.div className="card shadow-lg mt-5 mb-5 all-card m-auto-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}

            >
              <div className="card-body">
                <p className="card-text">{t('autosenaye1')}</p>
                <p className="card-text">{t('autosenaye2')}</p>
                <p className="card-text"> {t('autosenaye3')}</p>
                <p className="card-text">{t('autosenaye4')} </p>
              </div>
            </motion.div>


          </div>
          <div className="row m-auto">
        

            <motion.div className="col-6 mb-5"
              initial={{ opacity: 0, sclae: 0.5, translateX: -100 }}
              animate={{ opacity: 1, scale: 1, translateX: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="card  p-md-2" >
                <img src={SenayeQapilariAlt1} className="card-img-top objectFit  responsiveImg" alt="..." />

              </div>

            </motion.div>

            <motion.div className="col-6 mb-5"
              initial={{ opacity: 0, sclae: 0.5, translateX: -100 }}
              animate={{ opacity: 1, scale: 1, translateX: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="card  p-md-2" >
                <img src={SenayeQapilariAlt2} className="card-img-top objectFit responsiveImg" alt="..." />

              </div>

            </motion.div>
            {/* <motion.div className="col-4  mb-5"
              initial={{ opacity: 0, sclae: 0.5, translateX: -100 }}
              animate={{ opacity: 1, scale: 1, translateX: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="card  p-md-2" >
                <img src={SenayeQapilariUst} className="card-img-top objectFit  responsiveImgsenaye" alt="..." />

              </div>

            </motion.div> */}
          </div>


        </div>



      </div>

      <motion.div
      ref={ref2}
        variants={{
          hidden: { opacity: 0, translateX: -300 },
          visible: { opacity: 1, translateX: 0 }

        }}
        initial='hidden'
        animate={maincontrols2}
        transition={{ duration: 1 }}
        className='all-ourworks mt-5 m-auto'
      >

        <ProductTitle title={t('works2')} />
      </motion.div>




      <motion.div ref={ref} className="container mt-5"
        initial='hidden'
        animate={maincontrols}
        variants={container}


      >
        <div className="row m-auto">


          {
            autosenayeqapi.map((senaye) => (
              <motion.div ref={ref} key={senaye.id} className="col-4 col-xl-3  shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2 " >
                  <img src={senaye.imgUrl} className="card-img-top objectFit responsiveImg rounded" alt="..." />

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>
    </>





  )
}

export default AutoSenaye
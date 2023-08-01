import React, { useEffect, useRef } from 'react'
import BakudoorSeksional from '../../assets/bakudoorsseksional.jpg'
import Data from "../../datas/Data.json";
import ProductTitle from '../mainPages/about/ProductTitle';
import { motion, useInView, useAnimation } from 'framer-motion'
import { useTranslation } from 'react-i18next';


function AutoQaraj() {
  const {t} = useTranslation()
  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const isinview = useInView(ref)
  const isinview2 = useInView(ref2)
  const isinview3 = useInView(ref3)
  const maincontrols = useAnimation()
  const maincontrols2 = useAnimation()
  const maincontrols3 = useAnimation()

  useEffect(() => {

    if (isinview) {
      maincontrols.start('visible')

    }
    if (isinview2) {
      maincontrols2.start('visible')
    }
    if (isinview3) {
      maincontrols3.start('visible')
    }
  }, [isinview, isinview2, isinview3])


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
  const { autoqarajqapi, autoqarajdata } = Data

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
              <img src={BakudoorSeksional} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">{t('garage')}</h6>
              </div>
            </motion.div>


            <motion.div className="card shadow-lg mt-5 mb-5 all-card m-auto-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}

            >
              <div className="card-body">
                <p> {t('autoqaraj1')}</p>
                <p> {t('autoqaraj2')}</p>
                <p> {t('autoqaraj3')} </p>
              </div>
            </motion.div>

            <div>

              <div>
                <div className="container d-none ">
                  <div className="row">
                    <motion.div
                      initial={{ opacity: 0, translateX: -300 }}
                      animate={{ opacity: 1, translateX: 0 }}
                      transition={{ duration: 1 }}
                      className='all-ourworks mt-5 m-auto'

                    >

                      <ProductTitle title=' Avtomatik qapılar 3 əsas hissədən ibarətdir:' />
                    </motion.div>


                  </div>
                </div>



                <div className=" row m-auto d-none ">

                  {

                    autoqarajdata.map((data) => (
                      <motion.div key={data.id} ref={ref} className="col-4 col-xl-3  shadow mb-3 rounded"
                        variants={
                          {
                            hidden: { opacity: 0, translateX: -100 },
                            visible: { opacity: 1, translateX: 0 }
                          }
                        }
                        initial='hidden'
                        animate={maincontrols}
                        transition={{ duration: 3 }}

                      >
                        <div className="card  p-md-2 " >
                          <img src={data.imgUrl} className="card-img-top objectFit responsiveImg" alt="..." />
                          <div className="card-body ">
                            <h6 className='title responsiveTitle'>{data.title}</h6>
                            <p className="card-text d-none d-md-block responsiveText">{data.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  }



                </div>



              </div>

            </div>
          </div>



        </div>



      </div>




      <div ref={ref2} className="container">
        <div className="row">
          <motion.div
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


        </div>
      </div>







      <motion.div ref={ref3} className="container mt-5"
        initial='hidden'
        animate={maincontrols3}
        variants={container}


      >
        <div className="row m-auto">


          {
            autoqarajqapi.map((auto) => (
              <motion.div ref={ref3} key={auto.id} className="col-4 col-xl-3  shadow mb-3 rounded "
                variants={item}

              >
                <div className="card  p-md-2 " >
                  <img src={auto.imgUrl} className="card-img-top objectFit responsiveImg rounded" alt="..." />

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>

    </>






  )
}

export default AutoQaraj
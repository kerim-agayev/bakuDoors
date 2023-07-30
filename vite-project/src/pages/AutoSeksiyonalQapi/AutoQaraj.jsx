import React, { useEffect, useRef } from 'react'
import BakudoorSeksional from '../../assets/bakudoorsseksional.jpg'

import Data from "../../datas/Data.json";
import ProductTitle from '../mainPages/about/ProductTitle';
import { motion, useInView, useAnimation } from 'framer-motion'



function AutoQaraj() {
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

      <div className='container mt-md-5' >
        <div className='row'>
          <div className='col-8'>
            <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}

            >
              <img src={BakudoorSeksional} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">Avtomatik Qaraj Qapilari</h6>
              </div>
            </motion.div>


            <motion.div className="card shadow-lg mt-5 mb-5 all-card m-auto-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}

            >
              <div className="card-body">
                <p> 20-ci əsrin son dörddə biri  texnologiyanın inkişafı baxımından dünya tarixində görünməmiş bir sürətə  səhnə olmuşdur.. Hətta bundan 10 il əvvəlki texnologiya ilə günümüzdəki texnologiya arasındakı fərq  xəyal edilə bilməyəcək ölçülərə çatmışdır.</p>
                <p> Texnologiya sahəsindəki yeniliklər insanların həyatlarında çox böyük bir rahatlıq və asanlıq təmin  edəcək. İnsanlar evlərində, işlərində, məktəblərində bu inkişaflar sayəsində çox böyük asanlıqlar  yaşayacaq, rahat, əyləncəli və zövqlü mühitlərə qovuşacaqlar. Robotlar bir çox işdə insan gücünün yerini  alacaq. İnsanlar yerlərindən qalxmadan robotlar sayəsində, avtomatik əməliyyatlarla icra edə biləcəklər.</p>
                <p> Texnolgiyanın belə sürətlə inkişafı təbii ki qapılardan da yan keçməmişdir. Artıq insanlar sadəcə  düyməyə sıxmaqla istənilən qapını aça və ya bağlaya bilər. Avtomatik qapılar müasir dövrün dəbdə olan  sitemləridir.  Yağışlı, qarlı hava şəraitində və yaxud evə yorğun qayıdarkən avtomabilinizdən düşərək qapını açmağa ehtiyac yoxdur. </p>
              </div>
            </motion.div>

            <div>

              <div>
                <div className="container d-none d-md-block">
                  <div className="row">
                    <motion.div
                      initial={{ opacity: 0, translateX: -300 }}
                      animate={{ opacity: 1, translateX: 0 }}
                      transition={{ duration: 1 }}
                      className='all-ourworks mt-5'

                    >

                      <ProductTitle title=' Avtomatik qapılar 3 əsas hissədən ibarətdir:' />
                    </motion.div>


                  </div>
                </div>



                <div className="d-none d-md-block row all-map-container-qarajdata">
{

  autoqarajdata.map((data)=>(
    <motion.div key={data.id} ref={ref} className="col-4 col-lg-3 shadow mb-3 rounded"
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
                    <div className="card  p-md-2 all-map-card" >
                      <img src={data.imgUrl} className="card-img-top objectFit all-map-img" alt="..." />
                      <div className="card-body ">
                        <h6 className='title'>{data.title}</h6>
                        <p className="card-text d-none d-md-block">{data.text}</p>
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
            className='all-ourworks mt-5 '

          >

            <ProductTitle title=' ŞİRKƏTİMİZİN GÖRDÜYÜ İŞLƏR' />
          </motion.div>


        </div>
      </div>







      <motion.div ref={ref3} className="container mt-5"
        initial='hidden'
        animate={maincontrols3}
        variants={container}


      >
        <div className="row all-map-container-qaraj">


          {
            autoqarajqapi.map((auto) => (
              <motion.div ref={ref3} key={auto.id} className="col-4 col-lg-3 shadow mb-3 rounded "
                variants={item}

              >
                <div className="card  p-md-2 all-map-card-qaraj" >
                  <img src={auto.imgUrl} className="card-img-top objectFit all-map-img-qaraj" alt="..." />

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
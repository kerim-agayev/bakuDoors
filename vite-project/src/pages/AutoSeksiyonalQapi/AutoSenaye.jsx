import React, { useEffect, useRef } from 'react'
// import SenayeQapilariUst from '../../assets/senayeqapilariust.gif'
import SenayeQapilariAlt1 from '../../assets/senayeqapilarialt1.jpg'
import SenayeQapilariAlt2 from '../../assets/senayeqapilarialt2.jpg'
import BakuDoorSseksional from '../../assets/bakudoorsseksional.jpg'
import { motion, useInView, useAnimation } from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
import Data from "../../datas/Data.json";
function AutoSenaye() {
  const ref = useRef(null)

  const isinview = useInView(ref)

  const maincontrols = useAnimation()

  useEffect(() => {


    if (isinview) {
      maincontrols.start('visible')

    }


  }, [isinview])
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
                <h6 className="card-text">Avtomatik Senaye Qapilari</h6>
              </div>
            </motion.div>


            <motion.div className="card shadow-lg mt-5 mb-5 all-card m-auto-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}

            >
              <div className="card-body">
                <p>
                  Avtomatik qapıların  özəlliklərindən biri də istənilən şəraitə və mühitə uyğun quraşdırıla bilməsidir. Buna misal olaraq normal, vertikal və yarımvertikal avtomatik qapılardır.</p>
                <p className="card-text">Vertikal və yarımvertikal qapılar əsasən sənaye tipli obyektlərdə quraşdırılır. Sənaye qapıların quraşdırılma yerindən asılı olaraq müxtəlif cür quraşdırmaq olar. Ümumiyyətlə sənaye tipli avtomatik qapıların motorları 3 Faza olmalıdır ki, qapının hərəkətinə çətinlik yaratmasın. Sənaye avtomatik qapılar soyuğa və şaxtaya davamlıdır. Quraşdırılan sənaye obyektinin izolasiyasını təmin edir.</p>
                <p className="card-text">Yarımvertikal avtomatik qapılar – adından göründüyü kimi bu tip avtomatik qapılar istənilən məsafədən sonra dönərək tavanın altına yığıla bilər.  </p>
                <p className="card-text"> Vertikal avtomatik qapılar – tavana qədər açıla bilən qapılardır. Bu tip avtomatik qapılar əlavə yer tutmur və quraşdırılan yerdə avtomatik giriş-çixişi tənzimləyir.</p>
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
        initial={{ opacity: 0, translateX: -300 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className='all-ourworks mt-5 m-auto'
      >

        <ProductTitle title=' ŞİRKƏTİMİZİN GÖRDÜYÜ İŞLƏR' />
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
                  <img src={senaye.imgUrl} className="card-img-top objectFit responsiveImg" alt="..." />

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
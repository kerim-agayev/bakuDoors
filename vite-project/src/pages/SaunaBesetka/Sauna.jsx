import React from 'react'
import Data from "../../datas/Data.json";
import Saunalar from '/saunalar.jpg'
import { motion } from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
function Sauna() {


  const { saunaBesetka } = Data

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

          <div className='col-8 '>
            <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={Saunalar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">Sauna Tikintisi (Helo & Harvia)</h6>
              </div>
            </motion.div>



            <motion.div className="card mt-5 shadow-lg  all-card m-auto-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="card-body">
                <p>Saunaya vaxtaşırı getmək həyat tonusunu qoruyub saxlamağın çox səmərəli üsuludur. Sauna yorğunluğu götürür, dərinin elastikliyini qoruyur, artıq çəkini atmağa kömək edir, emosional bərpa üçün gözəl vasitə kimi çıxış edir. saunanın yüksək hərarəti maddələr mübadiləsini sürətləndirir, dəriyə müsbət təsir göstərir, xəstəliktörədici bakteriyaları və göbələkləri məhv edir. Saunada tərlədikdə toksin və şlaklar da orqanizmdən xaric olur. </p>
                <p>Saunalar ilk növbədə havasının nəmliyi ilə fərqlənir. Saunada havanın temperaturu 5-15% rütubətlilik də 70-90 0C təşkil edir. </p>
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

        <ProductTitle  title=' ŞİRKƏTİMİZİN GÖRDÜYÜ İŞLƏR' />
      </motion.div>



      <motion.div className="container mt-5 "
        initial='hidden'
        animate='visible'
        variants={container}


      >
        <div className="row all-map-container" >


          {
            saunaBesetka.map((sauna) => (
              <motion.div key={sauna.id} className="col-4 col-lg-3 shadow mb-3 rounded "
                variants={item}

              >
                <div className="card  p-md-2 all-map-card" >
                  <img src={sauna.imgUrl} className="card-img-top objectFit all-map-img" alt="..." />

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>
    </>


  )
}

export default Sauna








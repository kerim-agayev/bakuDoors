import  { useEffect, useRef } from 'react'
import Data from "../../datas/Data.json";
import DoxsanAcilanDarvaza from '/doxsanacilandarvaza.jpg'
import { motion , useInView, useAnimation} from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
import { useTranslation } from 'react-i18next';
function DoxsanDereceDarvaza() {
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

<div className='container mt-5' >
        <div className='row'>

          <div className='col-12'>
            <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={DoxsanAcilanDarvaza} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">{t('agates')}</h6>
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
        <div className="row all-map-container-doxsan">


          {
            doxsandarvaza.map((darvaza) => (
              <motion.div ref={ref} key={darvaza.id} className="col-4 col-xl-3  shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2 " >
                  <img src={darvaza.imgUrl} className="card-img-top objectFit responsiveImg rounded" alt="..." />

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
import  { useEffect, useRef } from 'react'
import { motion , useInView, useAnimation} from 'framer-motion'
import Data from "../../datas/Data.json";
import ProductTitle from '../mainPages/about/ProductTitle';
import { useTranslation } from 'react-i18next';
function AutoJaluzDarvaza() {
  const {t} = useTranslation()
  const ref = useRef(null)

  const isinview = useInView(ref)

  const maincontrols = useAnimation()

  useEffect(() => {

  
    if (isinview) {
      maincontrols.start('visible')

    }
   
    
  }, [isinview])
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
            className='all-ourworks mt-5 m-auto'
          >

            <ProductTitle title={t('works2')} />
          </motion.div>


        </div>
      </div>
      <motion.div ref={ref} className="container mt-5"
        initial='hidden'
        animate={maincontrols}
        variants={container}


      >
        <div className="row m-auto">


          {
            autojaluzqapi.map((auto) => (
              <motion.div ref={ref} key={auto.id} className="col-4 col-xl-3  shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2" >
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

export default AutoJaluzDarvaza
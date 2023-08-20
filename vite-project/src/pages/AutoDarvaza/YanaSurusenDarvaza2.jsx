import  { useEffect, useRef } from 'react'
import YanaSurusenQapi from '/yanasurusenqapi.jpg'
import YanaSurusenQapi3 from '/yanaSuruserekAcilanDarvaza/yanaAcilanDarvaza3.jpg'
import YanaSurusenQapi5 from '/yanaSuruserekAcilanDarvaza/yanaAcilanDarvaza5.jpg'
import YanaSurusenQapi6 from '/yanaSuruserekAcilanDarvaza/yanaAcilanDarvaza6.jpg'
import Data from "../../datas/Data.json";
import { motion , useInView, useAnimation} from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
import { useTranslation } from 'react-i18next';
import LazyImage from '../../components/LazyImage'
function YanaSurusenDarvaza2() {
 
  const {t} = useTranslation()
  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)

  const isinview = useInView(ref)
  const isinview2 = useInView(ref2)
  const isinview3 = useInView(ref3)
  const isinview4 = useInView(ref4)
  const isinview5 = useInView(ref5)


  const maincontrols = useAnimation()
  const maincontrols2 = useAnimation()
  const maincontrols3 = useAnimation()
  const maincontrols4 = useAnimation()
  const maincontrols5 = useAnimation()

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
    if (isinview4) {
      maincontrols4.start('visible')
    }
    if (isinview5) {
      maincontrols5.start('visible')
    }
   
  }, [isinview, isinview2, isinview3, isinview4, isinview5])




  const { yanasurusendarvaza } = Data
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
        <div className="row mt-5 vheight">

<h4 className="productHead">{t("bgates")}</h4>
<div className="col-12 col-md-8 mt-5">
  <div className="borderslaq  d-none d-md-block">
    <img
      src={YanaSurusenQapi}
      className=" head shadow objCover rounded"
      alt="..."
    />
  </div>
  <div className="d-md-none">
    <img
      src={YanaSurusenQapi}
      className=" head shadow objCover rounded"
      alt="..."
    />
  </div>
</div>
<div className="col-12 col-md-4 d-none d-md-block">
  <div className=" ps-3">
    <div className="mt-2 mt-md-5">
      <div className="headText">
        {" "}
        {t("sliding1")}
      </div>
    </div>
  </div>
</div>
<div className="col-12 col-md-4  d-md-none shadow rounded mt-5">
  <div className=" ps-3">
    <div className="mt-2 mt-md-5">
      <div className="headText">
        {" "}
        {t("sliding1")}
      </div>
    </div>
  </div>
</div>
</div>



    <motion.div className="row mt-5"
    ref={ref4}
    variants={{
      hidden: { opacity: 0, translateX: -300 },
      visible: { opacity: 1, translateX: 0 }

    }}
    initial='hidden'
    animate={maincontrols4}
    transition={{ duration: 1 }}
    
    >
      <div className="col-12 col-lg-8 m-auto">
      <div className='bg-info rounded mb-2 p-3'>  <h3 className='text-white'>  {t("autodoors1")}</h3>
        <p>
        {t("sliding4")}
        {t("sliding5")}
        </p></div>
        <div className="card shadow" >
  <img src={YanaSurusenQapi3} className="objCover head rounded" alt="..."/>
 
</div>
      </div>
    </motion.div>

<div className="row mt-5">
  <motion.div className="col-12 col-md-6 mb-5"
  ref={ref5}
  variants={{
    hidden: { opacity: 0, translateX: -300 },
    visible: { opacity: 1, translateX: 0 }

  }}
  initial='hidden'
  animate={maincontrols5}
  transition={{ duration: 1 }}
  >
   <div className='rounded p-3 bg-danger mb-2'>
    <h4 className='text-white'>{t('sidesliding1')}</h4>
    <p>{t('sidesliding2')}</p>
   </div>
  <div className="card shadow" >
  <img src={YanaSurusenQapi5} className="objCover head rounded" alt="..."/>
 
</div>
  </motion.div>
  <motion.div className="col-12 col-md-6"
  ref={ref3}
  variants={{
    hidden: { opacity: 0, translateX: 300 },
    visible: { opacity: 1, translateX: 0 }

  }}
  initial='hidden'
  animate={maincontrols3}
  transition={{ duration: 1 }}
  >
  <div className='rounded bg-danger p-3 mb-2'>
    <h4 className='text-white'>{t('sidesliding3')}</h4>
    <p>{t('sidesliding4')}</p>
   </div>
  <div className="card shadow" >
  <img src={YanaSurusenQapi6} className="objCover head rouCavab" alt="..."/>
 
</div>
  </motion.div>
</div>
<div className="row mt-5 bordercircle">
  <div className="col-4 listText">
    <p className='colorred'>{t("sual")}</p>
  </div>
  <div className="col-4 listText">
    <p>Sual 1: Lorem ipsum dolor sit, consectetur ?</p>
    <p>Sual 1: Lorem ipsum dolor sit, consectetur ?</p>
    <p>Sual 1: Lorem ipsum dolor sit, consectetur ?</p>
    <p>Sual 1: Lorem ipsum dolor sit, consectetur ?</p>
  </div>
  <div className="col-4 listText">
  <p>Cavab 1: Lorem ipsum dolor sit amet, consectetur </p>
    <p>Cavab 1: Lorem ipsum dolor sit amet, consectetur </p>
    <p>Cavab 1: Lorem ipsum dolor sit amet, consectetur </p>
    <p>Cavab 1: Lorem ipsum dolor sit amet, consectetur </p>
  </div>
</div>




<motion.div
        ref={ref2}
        variants={{
          hidden: { opacity: 0, translateX: -300 },
          visible: { opacity: 1, translateX: 0 },
        }}
        initial="hidden"
        animate={maincontrols2}
        transition={{ duration: 1 }}
        className="all-ourworks mt-5 m-auto"
      >
        <ProductTitle title={t("works2")} />
      </motion.div>

      <motion.div
        ref={ref}
        className="container mt-5 mb-5"
        initial="hidden"
        animate={maincontrols}
        variants={container}
      >
        <div className="row all-map-container-yanasurusen">
          {yanasurusendarvaza.map((darvaza) => (
            <motion.div
              ref={ref}
              key={darvaza.id}
              className="col-4   shadow mb-3 rounded"
              variants={item}
            >
              <div className="card  p-md-2 ">
              
                        <LazyImage src={darvaza.imgUrl}  id={darvaza.id}/>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>


<hr />
        </div>
    </>
  )
}

export default YanaSurusenDarvaza2
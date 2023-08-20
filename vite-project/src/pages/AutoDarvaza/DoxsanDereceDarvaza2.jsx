import  { useEffect, useRef } from 'react'
import DoxsanAcilanDarvaza from '/doxsanAcilanDarvaza/doxsanAcilanDarvaza15.jpg'
import DoxsanAcilanDarvaza2 from '/doxsanAcilanDarvaza/doxsanAcilanDarvaza7.jpg'
import DoxsanAcilanDarvaza3 from '/doxsanAcilanDarvaza/doxsanAcilanDarvaza3.jpg'
import DoxsanAcilanDarvaza4 from '/doxsanAcilanDarvaza/doxsanAcilanDarvaza6.jpg'
import DoxsanAcilanDarvaza5 from '/doxsanAcilanDarvaza/doxsanAcilanDarvaza11.jpg'
import Data from "../../datas/Data.json";
import { motion , useInView, useAnimation} from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
import { useTranslation } from 'react-i18next';
import LazyImage from '../../components/LazyImage'

function DoxsanDereceDarvaza2() {
  
  const {t} = useTranslation()

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);


  const isinview = useInView(ref);
  const isinview2 = useInView(ref2);
  const isinview3 = useInView(ref3);
  const isinview4 = useInView(ref4);
  const isinview5 = useInView(ref5);
  const isinview6 = useInView(ref6);
  const isinview7 = useInView(ref7);



  const maincontrols = useAnimation();
  const maincontrols2 = useAnimation();
  const maincontrols3 = useAnimation();
  const maincontrols4 = useAnimation();
  const maincontrols5 = useAnimation();
  const maincontrols6 = useAnimation();
  const maincontrols7 = useAnimation();




  useEffect(() => {
    if (isinview) {
      maincontrols.start("visible");
    }
    if (isinview2) {
      maincontrols2.start("visible");
    }
    if (isinview3) {
      maincontrols3.start("visible");
    }
    if (isinview4) {
      maincontrols4.start("visible");
    }
    if (isinview5) {
      maincontrols5.start("visible");
    }
    if (isinview6) {
      maincontrols6.start("visible");
    }
    if (isinview7) {
      maincontrols7.start("visible");
    }
  
  }, [isinview,isinview2,isinview3, isinview4, isinview5, isinview6, isinview7]);




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
 <div className="container">
 <div className="row mt-5 vheight">

<h4 className="productHead">{t('agates')}</h4>
<div className="col-12 col-md-8 mt-5">
  <div className="borderslaq  d-none d-md-block">
    <img
      src={DoxsanAcilanDarvaza}
      className=" head shadow objCover rounded"
      alt="..."
    />
  </div>
  <div className="d-md-none">
    <img
      src={DoxsanAcilanDarvaza}
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




  
   
<div className="row mt-5">
  <motion.div className="col-12 col-lg-6 "
  ref={ref}
       variants={{
          hidden: { opacity: 0, translateX: -300 },
          visible: { opacity: 1, translateX: 0 }

        }}
        initial='hidden'
        animate={maincontrols}
        transition={{ duration: 1 }}
  >
  <div className="card shadow" >
  <img src={DoxsanAcilanDarvaza2} className="objCover head rounded" alt="..."/>
 
</div>
  </motion.div>
  <motion.div className="col-12 col-lg-6 rounded bg-info text-white p-3 fs-5 mt-3 mt-lg-0"
  ref={ref2}
  variants={{
    hidden: { opacity: 0, translateX: 300 },
    visible: { opacity: 1, translateX: 0 }

  }}
  initial='hidden'
  animate={maincontrols2}
  transition={{ duration: 1 }}
  >
{t('ninety')}
  </motion.div>
</div>
<div className="row mt-5">
  <motion.div className="col-12 col-md-4 mb-5"
  ref={ref3}
       variants={{
          hidden: { opacity: 0, translateY: 300 },
          visible: { opacity: 1, translateY: 0 }

        }}
        initial='hidden'
        animate={maincontrols3}
        transition={{ duration: 1 }}
  >
  <div className="card shadow" >
  <img src={DoxsanAcilanDarvaza3} className="objCover head rounded" alt="..."/>
<div className='ninetywh p-3 bg-danger rounded mt-1'>  <h4 className='text-white'>{t('ninety2')}</h4>
  <p>{t('ninety21')}</p></div>
</div>

  </motion.div>
  <motion.div className="col-12 col-md-4 mb-5"
  ref={ref4}
  variants={{
    hidden: { opacity: 0, translateY: 300 },
    visible: { opacity: 1, translateY: 0 }

  }}
  initial='hidden'
  animate={maincontrols4}
  transition={{ duration: 1 }}
  >
  <div className="card shadow" >
  <img src={DoxsanAcilanDarvaza4} className="objCover head rounded" alt="..."/>
<div className='ninetywh p-3 bg-danger rounded mt-1'>  <h4 className='text-white'>{t('ninety3')}</h4>
  <p>{t('ninety31')}</p></div>
</div>
  </motion.div>
  <motion.div className="col-12 col-md-4 mb-5"
  ref={ref5}
  variants={{
    hidden: { opacity: 0, translateY: 300 },
    visible: { opacity: 1, translateY: 0 }

  }}
  initial='hidden'
  animate={maincontrols5}
  transition={{ duration: 1 }}
  
  
  >
  <div className="card shadow" >
  <img src={DoxsanAcilanDarvaza5} className="objCover head rounded" alt="..."/>
<div className='ninetywh p-3 bg-danger rounded mt-1'>  <h4 className='text-white'>{t('ninety4')}</h4>
  <p>{t('ninety41')}</p></div>
</div>
  </motion.div>
</div>
<div className="row mt-5 bordercircle mb-5">
  <div className="col-4 listText">
    <p className='colorred'>{t("sual2")}</p>
  </div>
  <div className="col-4 listText">
    <p>Sual 1: Lorem ipsum dolor sit consectetur ?</p>
    <p>Sual 2: Lorem ipsum dolor sit consectetur ?</p>
    <p>Sual 3: Lorem ipsum dolor sit consectetur ?</p>
    <p>Sual 4: Lorem ipsum dolor sit consectetur ?</p>
  </div>
  <div className="col-4 listText">
  <p>Cavab 1: Lorem ipsum dolor sit, consectetur </p>
    <p>Cavab 2: Lorem ipsum dolor sit, consectetur </p>
    <p>Cavab 3: Lorem ipsum dolor sit, consectetur </p>
    <p>Cavab 4: Lorem ipsum dolor sit, consectetur </p>
  </div>
</div>




<motion.div
      ref={ref6}
      variants={{
        hidden: { opacity: 0, translateX: -300 },
        visible: { opacity: 1, translateX: 0 }

      }}
      initial='hidden'
      animate={maincontrols6}
      transition={{ duration: 1 }}
        className='all-ourworks mt-5 m-auto'
      >

        <ProductTitle title={t('works2')} />
      </motion.div>



      <motion.div ref={ref7} className="container mt-5 mb-5"
        initial='hidden'
        animate={maincontrols7}
        variants={container}


      >
        <div className="row all-map-container-doxsan">


          {
            doxsandarvaza.map((darvaza) => (
              <motion.div ref7={ref7} key={darvaza.id} className="col-4 col-xl-3  shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2 " >
                <LazyImage src={darvaza.imgUrl}  id={darvaza.id}/>

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>



<hr />
        </div>
    </>
  )
}

export default DoxsanDereceDarvaza2
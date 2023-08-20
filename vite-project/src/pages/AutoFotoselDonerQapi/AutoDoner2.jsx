import  { useEffect, useRef } from 'react'
import AutoDonerPhoto from '/revolving.jpg'
import AutoDonerPhoto2 from '/revolving2.jpg'
import AutoDonerPhoto3 from '/revolving3.jpg'
import Data from "../../datas/Data.json";
import { motion , useInView, useAnimation} from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
import { useTranslation } from 'react-i18next';
import LazyImage from '../../components/LazyImage';

function AutoDoner2() {
  const {t} = useTranslation()
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const isinview = useInView(ref);
  const isinview2 = useInView(ref2);
  const isinview3 = useInView(ref3);
  const isinview4 = useInView(ref4);
  const isinview5 = useInView(ref5);
  const isinview6 = useInView(ref6);
  const maincontrols = useAnimation();
  const maincontrols2 = useAnimation();
  const maincontrols3 = useAnimation();
  const maincontrols4 = useAnimation();
  const maincontrols5 = useAnimation();
  const maincontrols6 = useAnimation();
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
  }, [isinview, isinview2,isinview3, isinview4, isinview5, isinview6]);
  const { donerqapi } = Data

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
          <h4 className="productHead"> {t('revolving')}</h4>
          <div className="col-12 col-md-8 mt-5">
            <div className="borderslaq  d-none d-md-block">
              <img
                src={AutoDonerPhoto}
                className=" head shadow objCover rounded"
                alt="..."
              />
            </div>
            <div className="d-md-none">
              <img
                src={AutoDonerPhoto}
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
                  <p>{t("revolving1")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4  d-md-none shadow rounded mt-5">
            <div className=" ps-3">
              <div className="mt-2 mt-md-5">
                <div className="headText">
                  {" "}
                  <p>{t("revolving1")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  <div className="row mt-5">
    <motion.div className="col-12 col-lg-6"
    ref={ref5}
    variants={{
      hidden: { opacity: 0, translateX: -300 },
      visible: { opacity: 1, translateX: 0 }

    }}
    initial='hidden'
    animate={maincontrols5}
    transition={{ duration: 1 }}
    >
    <div className="">
              <img
                src={AutoDonerPhoto2}
                className=" responsiveImgAll shadow objCover rounded"
                alt="..."
              />
            </div>


    </motion.div>
    <motion.div className="col-12 col-lg-6 bg-danger text-white p-3 mb-5 mt-2 mt-lg-0 rounded"
    ref={ref6}
    variants={{
      hidden: { opacity: 0, translateX: 300 },
      visible: { opacity: 1, translateX: 0 }

    }}
    initial='hidden'
    animate={maincontrols6}
    transition={{ duration: 1 }}
    >

    <p>{t("revolving5")}</p>
<p>{t("revolving6")}</p>
<p className='d-none d-lg-block'>{t("revolving10")}</p>
    </motion.div>
  </div>
  <div className="row mt-5">
  <motion.div className="col-12 col-lg-6 bg-danger text-white p-3 mb-5 mt-2 mt-lg-0 rounded"
  ref={ref3}
     variants={{
      hidden: { opacity: 0, translateX: -300 },
      visible: { opacity: 1, translateX: 0 }

    }}
    initial='hidden'
    animate={maincontrols3}
    transition={{ duration: 1 }}
  
  >
<p>{t("revolving3")}</p>
<p>{t("revolving4")}</p>
<p className='d-none d-lg-block'>{t("revolving11")}</p>
  </motion.div>
    <motion.div className="col-12 col-lg-6"
    ref={ref4}
       variants={{
        hidden: { opacity: 0, translateX: 300 },
        visible: { opacity: 1, translateX: 0 }

      }}
      initial='hidden'
      animate={maincontrols4}
      transition={{ duration: 1 }}
    
    
    >
    <div className="">
              <img
                src={AutoDonerPhoto3}
                className=" responsiveImgAll shadow objCover rounded"
                alt="..."
              />
            </div>
    </motion.div>
  
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




      <motion.div ref={ref} className="container mt-5 mb-5"
        initial='hidden'
        animate={maincontrols}
        variants={container}


      >
        <div className="row m-auto">


          {
            donerqapi.map((qapi) => (
              <motion.div ref={ref} key={qapi.id} className="col-4  shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2 " >
                
                  <LazyImage src={qapi.imgUrl}  id={qapi.id}/>
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

export default AutoDoner2
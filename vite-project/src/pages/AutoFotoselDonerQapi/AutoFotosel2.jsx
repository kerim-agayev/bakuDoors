import AutoFotoselPhoto1 from "/fotoselQapi/fotoselQapi8.jpg";
import AutoFotoselPhoto5 from "/fotoselQapi/fotoselQapi14.jpg";
import AutoFotoselPhoto6 from "/fotoselQapi/fotoselQapi13.jpg";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Data from "../../datas/Data.json";
import ProductTitle from '../mainPages/about/ProductTitle';
import { useTranslation } from "react-i18next";
import LazyImage from "../../components/LazyImage";
function AutoFotosel2() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const isinview = useInView(ref);
  const isinview2 = useInView(ref2);
  const isinview3 = useInView(ref3);
  const isinview4 = useInView(ref4);
  const isinview5 = useInView(ref5);
  const maincontrols = useAnimation();
  const maincontrols2 = useAnimation();
  const maincontrols3 = useAnimation();
  const maincontrols4 = useAnimation();
  const maincontrols5 = useAnimation();
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
  }, [isinview, isinview2,isinview3, isinview4, isinview5]);



  const { fotosel } = Data
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
    }}

  return (
    <>
      <div className="container">
        <div className="row mt-5 vheight">
          <h4 className="productHead"> {t("photocell")}</h4>
          <div className="col-12 col-md-8 mt-5">
            <div className="borderslaq  d-none d-md-block">
              <img
                src={AutoFotoselPhoto1}
                className=" head shadow objCover rounded"
                alt="..."
              />
            </div>
            <div className="d-md-none">
              <img
                src={AutoFotoselPhoto1}
                className=" head shadow objCover rounded"
                alt="..."
              />
            </div>
          </div>
          <div className="col-12 col-md-4 d-none d-md-block">
            <div className=" ps-3">
              <div className="mt-2 mt-md-5">
                <div className="headText"> {t("fotocell2")}</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4  d-md-none shadow rounded mt-5">
            <div className=" ps-3">
              <div className="mt-2 mt-md-5">
                <div className="headText"> {t("fotocell2")}</div>
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
          <div className="col-12 bg-success text-white p-3 rounded shadow">
            <p>{t("fotocell3")}</p>
            <p>{t("fotocell4")}</p>
          </div>
        </motion.div>
        <div className="row mt-5">
          <motion.div className="col-12 col-lg-6 mb-5"
          ref={ref5}
          variants={{
            hidden: { opacity: 0, translateX: -300 },
            visible: { opacity: 1, translateX: 0 }
  
          }}
          initial='hidden'
          animate={maincontrols5}
          transition={{ duration: 1 }}
          
          >
            <div className="rounded bg-danger">
              <img
                src={AutoFotoselPhoto5}
                className=" responsiveImgAll shadow objContain"
                alt="..."
              />
          
            </div>
            <div className="bg-info rounded p-2 mt-2">
                <h4 className="text-white">{t('fotoselmain21')}</h4>
                <p>{t('fotoselmain22')}</p>
              </div>
          </motion.div>
          <motion.div className="col-12 col-lg-6"
          ref={ref3}
          variants={{
            hidden: { opacity: 0, translateX: 300 },
            visible: { opacity: 1, translateX: 0 }
  
          }}
          initial='hidden'
          animate={maincontrols3}
          transition={{ duration: 1 }}
          
          >

            <div className="rounded bg-danger">
              <img
                src={AutoFotoselPhoto6}
                className=" responsiveImgAll shadow objContain"
                alt="..."
              />
            </div>
             <div className="bg-info rounded p-2 mt-2">
                <h4 className="text-white">{t('fotoselmain23')}</h4>
                <p>{t('fotoselmain24')}</p>
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
        <div className="row all-map-container-fotosel">


          {
            fotosel.map((foto) => (
              <motion.div ref={ref} key={foto.id} className="col-4  shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2" >
                  <LazyImage src={foto.imgUrl}  id={foto.id}/>
                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>


      <hr />
      </div>
     
    
    </>
  );
}

export default AutoFotosel2;

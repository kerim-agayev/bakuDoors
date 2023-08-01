import React, { useEffect, useRef } from 'react'
import YanaSurusenQapi from '../../assets/yanasurusenqapi.jpg'
import Data from "../../datas/Data.json";
import { motion , useInView, useAnimation} from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
import { useTranslation } from 'react-i18next';

function YanaSurusenDarvaza() {
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
        <div className='container mt-5' >
      <div className='row'>
        <div className='col-12'>
          <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
          
          >
            <img src={YanaSurusenQapi} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">YANA SÜRÜŞƏRƏK AÇILAN DARVAZALAR</h6>
            </div>
          </motion.div>

          <motion.div className="card mt-5 shadow-lg all-card m-auto-all"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
          
          >
            <div className="card-body ">
              <ul className="list-group ">
                <li className="list-group-item">Avtomatik darvaza qapılarının elektron hissələri ən son texnologiya ilə istehsal olunur(İTALİYA İSTEHSALI).</li>
                <li className="list-group-item">  Avtomatik darvaza qapıları pultla heç bir çətinlik olmadan idarə olunur.</li>
                <li className="list-group-item">  Avtomatik darvaza qapıları tam təhlükəsizliyə  malikdir.</li>
                <li className="list-group-item"> Avtomatik darvaza qapıları çox gözəl görünüşə və keyfiyyətə malikdir.</li>
                <li className="list-group-item">  Avtomatik darvaza qapıları elektrik enejisinin qənaətinə görə çox ekonom və möhtəşəmdir.</li>
                <li className="list-group-item">   Avtomatik darvaza qapıları elektrik enejisi kəsildikdə belə əlavə qoşulan batareyalar sayəsində asanlıqla açılıb-bağlana bilir.</li>
                <li className="list-group-item"> Avtomatik darvaza qapılarına quraşdırılan motorların özü də darvazaya xüsusi gözəllik verir.</li>

              </ul>
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

        <ProductTitle title=' ŞİRKƏTİMİZİN GÖRDÜYÜ İŞLƏR' />
      </motion.div>



      <motion.div ref={ref} className="container mt-5"
        initial='hidden'
        animate={maincontrols}
        variants={container}


      >
        <div className="row all-map-container-yanasurusen">


          {
            yanasurusendarvaza.map((darvaza) => (
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

export default YanaSurusenDarvaza
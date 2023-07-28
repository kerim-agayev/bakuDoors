import React from 'react'
import YanaSurusenQapi from '../../assets/yanasurusenqapi.jpg'
import Data from "../../datas/Data.json";
import { motion } from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
function YanaSurusenDarvaza() {
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
        <div className='container mt-md-5' >
      <div className='row'>
        <div className='col-8'>
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
            <div className="card-body">
              <ul className="list-group">
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
        initial={{ opacity: 0, translateX: -300 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className='all-ourworks mt-5'
      >

        <ProductTitle title=' ŞİRKƏTİMİZİN GÖRDÜYÜ İŞLƏR' />
      </motion.div>



      <motion.div className="container mt-5"
        initial='hidden'
        animate='visible'
        variants={container}


      >
        <div className="row all-map-container-yanasurusen">


          {
            yanasurusendarvaza.map((darvaza) => (
              <motion.div key={darvaza.id} className="col-4 col-lg-3 shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2 all-map-card" >
                  <img src={darvaza.imgUrl} className="card-img-top objectFit all-map-img-yanasurusen" alt="..." />

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
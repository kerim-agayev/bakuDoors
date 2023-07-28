import React from 'react'
import AutoDonerPhoto from '/autodoner.jpg'
import Data from "../../datas/Data.json";
import { motion } from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
function AutoDoner() {
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
    
    <div className='container mt-5' >
      <div className='row'>

        <div className='col-8'>
          <motion.div className="card shadow" style={{ width: '18rem' }}
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
          
          
          >
            <img src={AutoDonerPhoto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">
                Avtomatik Dönər Qapılar</h6>
            </div>
          </motion.div>



          <motion.div class="card mt-5 mb-5 shadow-lg all-card m-auto-all"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
          
          
          >
            <div class="card-body">
            <p>Avtomatik fırlanan qapılar bina içindəki temperatur  səviyyəsini  sabit saxlamaq üçün ən ideal avadanlıqdır. Giriş  və çıxışlardakı  insan axımını yüksək  səviyyədə  idarə edir. Dizayn baxımından ticari obyektlərdə  yadda qalan  bir görüntü  yaradır. </p>

            </div>
          </motion.div>

        
        </div>
        <motion.div className="col-md-8 "
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
        
        
        >
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">Xüsusiyyətləri :</li>
            <li className="list-group-item">Radarların  fırlanan qapı tavanlarında  gizli   şəkildə  yerləşməsi</li>
            <li className="list-group-item">Avtomatik fırlanan qapları 2, 3 və ya 4  qanadlı  olmaqla  3  fərqli  variantda  istehsal  edilməkdədir</li>
            <li className="list-group-item">Aliminium  gövdə  üzərinə  geydirilən  müxtəlif  rəng  və material  seçimi</li>
            <li className="list-group-item">Horizontal   və vertikal  olaraq insan keçid  sürətini  tənzimləyən  qanad  rezinləri
            </li>
            <li className="list-group-item">Əlillərin istifadəsini  yüngülləşdirmək üçün  əlavə  düymə  vasitəsilə   hərəkətə gətirilmə qabiliyyəti</li>
            <li className="list-group-item">Avtomatik və ya mexaniki hərəkət seçimi.</li>

          </ul>
        </motion.div>



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
        <div className="row all-map-container-doner-qapi">


          {
            donerqapi.map((qapi) => (
              <motion.div key={qapi.id} className="col-4 col-lg-3 shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2 all-map-card-doner-qapi" >
                  <img src={qapi.imgUrl} className="card-img-top objectFit all-map-img-doner-qapi" alt="..." />

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>
    </>
  



  )
}

export default AutoDoner
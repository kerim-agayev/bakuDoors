import React from 'react'
import AutoFotoselEsas from '/autofotoselesas.jpg'
import AutoFotosel1 from '/autofotosel1.jpg'
import Data from "../../datas/Data.json";

import { motion } from 'framer-motion'
import ProductTitle from '../mainPages/about/ProductTitle';
function AutoFotosel() {
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
    }


  }
  return (

    <>
    
    <div className='container mt-md-5 ' >
      <div className='row'>
        <div className='col-8'>
          <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
          >
            <img src={AutoFotoselEsas} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">AVTOMATİK FOTOSEL QAPILAR</h6>
            </div>
          </motion.div>
          <motion.div class="card mt-5 mb-5 shadow-lg all-card m-auto-all"
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
          
          >
            <div class="card-body">
              <p>Avtomatik fotosel qapılar - Qapı boşluğu üzərinə asılan bir ray üzərində sürüşərək hərəkət edən tək və ya cüt istiqamətə açılan qanadlardan ibarət sürüşən qapını avtomatik hala gətirilməsi sistemidir. Sistemin adı avtomatik sürüşən qapı olmaqla birlikdə, qapıya yaxınlaşan kəslərin qəbul edilməsini təmin edən infrared və ya mikrodalğalı radarlar xalq arasında fotosel olaraq bilindiyindən, fotoselli qapı adı dəyişməz bir şəkildə söz xəzinəmizə yerləşmiş vəziyyətdədir.</p>
              <p>Fotosel qapılar motor sistemi, alüminium profillər və şüşədən ibarətdir.</p>
            </div>
          </motion.div>





        </div>



        <div className='col-8  d-none d-md-block'>
          <motion.div className="card shadow-lg mb-5" style={{ width: '50rem' }}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
          >
            <img src={AutoFotosel1} className="card-img-top" alt="..." />

          </motion.div>

        </div>

      </div>
      <motion.div className="row mt-5"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
      
      
      >
        <div className="col-md-6 mt-5 shadow-lg">
          <ul className="list-group">
            <li className="list-group-item">Maksimum qanad tutumu; 1 qanad ən çox 140 kq - 500-dən 2.800 mm.'ye qədər. 2 qanad ən çox hər biri 80 kq - 500-dən 1400 mm.'ye qədər.</li>
            <li className="list-group-item">Maksimum itələmə qüvvəsi: 150 N Açılma / Kapanma Sürəti: 15 - 55 cm./sn. arası nizamlana bilər.</li>
            <li className="list-group-item">Yavaşlama / Yaklaşma Sürəti: 1 - 10 cm./sn. arası nizamlana bilər.</li>
            <li className="list-group-item">Yavaşlama / Yaklaşma məsafə: 1 - 50 sm. arası nizamlana bilər.</li>
            <li className="list-group-item">Dayanıb Kapatma vaxtı (Avtomatik / Yarı Manuel / Manuel): 0-60 saniyə arası nizamlana bilər.</li>
            <li className="list-group-item">Vites mühərriki / Elektron kart / Konverter / Batareya: Şaseye montajlı haldadır.</li>
            <li className="list-group-item">Mühərrik: 24V DC - 45W qalıcı maqnitli və fırçaları inteqrasiya vəziyyətdədir.</li>
            <li className="list-group-item">Vites Düşürme Vahidi: Tərsinə çevrilə və sərbəst qorumalıdır.</li>
            <li className="list-group-item">Hərəkatı Ötürmə Forması: Anti-statik cədvəli polad qayışla edilər.</li>
            <li className="list-group-item">Kanat Nizamlamaları: yüksəklikdə, üfüqi və şaquli olaraq düzəlişlər edilə bilər.</li>
            <li className="list-group-item">Güc Qaynağı: 230V +/- 10% 50/60 Hz Adaptörle birlikdə 24V aşağı gərginlik.</li>
            <li className="list-group-item">Xərclədiyi Güc məbləği: Maksimum 150 vat.</li>
            <li className="list-group-item">Əmək İstilik Aralığı: -20 ° C / + 50 ° C</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">Qoruma Sınıfı: IP 23 Radar: 0,50 - 2,50 metr məsafə təyin edilə bilər, micro - processor radar.</li>
          </ul>
        </div>

      </motion.div>



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
        <div className="row all-map-container-fotosel">


          {
            fotosel.map((foto) => (
              <motion.div key={foto.id} className="col-4 col-lg-3 shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-md-2 all-map-card" >
                  <img src={foto.imgUrl} className="card-img-top objectFit all-map-img" alt="..." />

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>
    </>
  
  )
}

export default AutoFotosel
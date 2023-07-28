import React from "react";
import ProductTitle from "./ProductTitle";
import {motion} from 'framer-motion'
function About() {
  return (
    <>
    <motion.div className="motion"
    
    initial={{opacity:0 , scale:0.5}}
    animate={{opacity:1, scale:1}}
    transition={{delay:0.2,duration:1}}
  
    
    
    >
    <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <ProductTitle title="Haqqımızda" />
          </div>
          <ul className="ulAbout col-12 mx-2 bg-primary text-white rounded p-3">
          <li className="liAbout"><h5> Hörmətli Müştəri.</h5></li>
            <li className="liAbout"><h5>Dəyərli və qiymətli vaxtınızı bizə sərf etdiyiniz üçün öncədən Sizə dərin minnətdarlığımızı bildiririk.</h5></li>

            <li className="liAbout"><h5>Biz – Baku DOORS  olaraq Azərbaycanda avtomatlaşdırma sahəsində fəaliyyət göstəririk. Bizim üçün vacib olanı Müştərilərimizə keyfiyyətli və səmərəli xidmət göstərməkdir.</h5></li>

            <li className="liAbout"><h5>Şirkətimiz fəaliyyəti--- avtomatik qapılar və şlaqbaum sistemləridir..</h5></li>

            <li className="liAbout"><h5> Qarajların , darvazaların , anbarların və marketlərin qapı larının avtomatik olaraq açılıb bağlanmasını--Siz Baku DOORS-a etibar edin..</h5></li>

            <li className="liAbout"><h5>Şirkətimizin istifadə etdiyi mal-materiallar Avropanın brend şirkətlərinə məxsusdur. . </h5></li>

            <li className="liAbout"><h5>Bizim partnyorlarımız olan Beninca, Ditec, Label, Tecsedo, Game, Naturalbond, Flexidoor, Alp Alüminium, Əmrə Alüminium dünya bazarında yüksək reytinqə nail olmuşdur.</h5></li>

            <li className="liAbout"><h5>Artıq bu şirkətlərin məhsullarını Sizdə Baku DOORS  vasitəsilə əldə edə bilrəsiniz. </h5></li>
            <li className="liAbout"><h5>Rahatlığınızı bizə etibar edin. Kefiyyətli məhsullar və professional işçilərimiz sayəsində müştərilərimizin zövqünə uyğun gördüyümüz hər bir işə məsuliyyət və cavabdehlik daşıyırıq.</h5></li>
            <li className="liAbout"><h5>Hörmətlə : Baku DOORS </h5></li>
          </ul>
        </div>
      </div>


    </motion.div>
    
    </>
  );
}

export default About;
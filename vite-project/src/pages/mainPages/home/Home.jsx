
import React from "react";

import Card from "react-bootstrap/Card";
import { NavLink, Outlet } from "react-router-dom"
import SliderComp from "../../../components/SliderComp";

import BakuDoorSseksional from '../../../assets/bakudoorsseksional.jpg'
import JaluzSistemleri from '../../../assets/jaluzsistemleri.jpg'
import AutoFotoselEsas from '../../../assets/autofotoselesas.jpg'
import AutoDarvazalar from '../../../assets/autodarvazalar.jpg'
import CamBalkon from '../../../assets/cambalkon.jpg'
import Pergole from '../../../assets/pergole.jpg'
import Slaqbaumlar2 from '../../../assets/slaqbaumlar2.jpg'
import Saunalar from '../../../assets/saunalar.jpg'
import Servis from '../../../assets/servis.jpg'

import ProductTitle from "../about/ProductTitle";
import { delay, motion } from 'framer-motion'


function Home() {

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

  const photoLinks = [
    { id: 1, title: BakuDoorSseksional, text: 'Avtomatik Seksiyonal Qapilar', link: 'autoseksiyonalqapi' },
    { id: 2, title: JaluzSistemleri, text: 'Avtomatik Jaluz Qapilar', link: 'autojaluzqapi' },
    { id: 3, title: AutoFotoselEsas, text: 'Avtomatik Fotosel ve Doner Qapilar', link: 'autofotoseldonerqapi' },
    { id: 4, title: AutoDarvazalar, text: 'Avtomatik Darvazalar', link: 'autodarvaza' },
    { id: 5, title: Pergole, text: 'Pergole ve Tent Sistemleri', link: 'pergoletent' },
    { id: 6, title: CamBalkon, text: 'Avtomatik Suse Sistemleri', link: 'autosuse' },
    { id: 7, title: Slaqbaumlar2, text: 'Avtomatik Baryer Sistemleri', link: 'autobaryer' },
    { id: 8, title: Saunalar, text: 'Sauna & Besetka', link: 'saunabesetka' },
    { id: 9, title: Servis, text: 'Servis & Qurasdirma', link: 'servisqurasdirma' },
  ];






  return (
    <>
      <ProductTitle title=" Məhsul Kateqoriyaları" />
      <motion.div className="container mt-5"
           initial='hidden'
      animate='visible'
    
      
      variants={container}
   

      >
        <div className="row">


          {
            photoLinks.map((photo) => (
              <motion.div key={photo.id} className="col-12 text-center col-md-6 col-lg-4"
              variants={item}
           
              
              >
                <Card className="my-3 border border-primary rounded-5 p-3 ">

                  <img className="m-auto homeCards" src={photo.title} alt="" style={{ width: '18rem', height: '18rem' }} />

                  <Card.Body className="">
                    <Card.Title>{photo.text}</Card.Title>

                    <NavLink
                      className="d-inline-flex align-items-center text-decoration-none  mx-3 my-2 bg-primary rounded p-3 text-white"
                      to={photo.link}
                    >
                      {" "}
                      Məhsullara bax
                    </NavLink>
                  </Card.Body>
                </Card>
              </motion.div>
            ))

          }

        </div>
      </motion.div>
      {/* <SliderComp /> */}
    </>
  );
}

export default Home;

import React from "react";

import Card from "react-bootstrap/Card";
import { NavLink, Outlet } from "react-router-dom"
import SliderComp from "../../../components/SliderComp";

import BakuDoorSseksional from '/bakudoorsseksional.jpg'
import JaluzSistemleri from '/jaluzsistemleri.jpg'
import AutoFotoselEsas from '/autofotoselesas.jpg'
import AutoDarvazalar from '/autodarvazalar.jpg'
import CamBalkon from '/cambalkon.jpg'
import Pergole from '/pergole.jpg'
import Slaqbaumlar2 from '/slaqbaumlar2.jpg'
import Saunalar from '/saunalar.jpg'
import Servis from '/servis.jpg'

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
              <motion.div key={photo.id} className="col-12 text-center col-md-4"
              variants={item}
           
              
              >
                <Card className="my-3 border border-primary rounded-5 p-3 ">

                  <img src={photo.title} alt="" style={{ width: '18rem', height: '18rem' }} />

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
      <SliderComp />
    </>
  );
}

export default Home;
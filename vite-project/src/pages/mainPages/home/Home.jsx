
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
import {  motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

function Home() {
  const {t} = useTranslation()
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
    { id: 1, title: BakuDoorSseksional, text:t('a'), link: 'autoseksiyonalqapi' },
    { id: 2, title: JaluzSistemleri, text: t('b'), link: 'autojaluzqapi' },
    { id: 3, title: AutoFotoselEsas, text: t('i'), link: 'autofotoseldonerqapi' },
    { id: 4, title: AutoDarvazalar, text: t('d'), link: 'autodarvaza' },
    { id: 5, title: Pergole, text: t('e'), link: 'pergoletent' },
    { id: 6, title: CamBalkon, text: t('f'), link: 'autosuse' },
    { id: 7, title: Slaqbaumlar2, text: t('g'), link: 'autobaryer' },
    { id: 8, title: Saunalar, text: t('h'), link: 'saunabesetka' },
    { id: 9, title: Servis, text:t('c'), link: 'servisqurasdirma' },
  ];






  return (
    <>
      <ProductTitle title={t('productcategory')} />
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

                  <img className="m-auto homeCards rounded" src={photo.title} alt="" style={{ width: '18rem', height: '18rem' }} />

                  <Card.Body className="">
                    <Card.Title>{photo.text}</Card.Title>

                    <NavLink
                      className="d-inline-flex align-items-center text-decoration-none  mx-3 my-2 bg-primary rounded p-3 text-white"
                      to={photo.link}
                    >
                      {" "}
                    {t('seeproducts')}
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
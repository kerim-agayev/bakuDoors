import Card from "react-bootstrap/Card";
import { Link, NavLink } from "react-router-dom";
import SliderComp from "../../../components/SliderComp";
import { AiFillRightCircle} from 'react-icons/ai'
import BakuDoorSseksional from "/bakudoorsseksional.jpg";
import JaluzSistemleri from "/jaluzsistemleri.jpg";
import AutoFotoselEsas from "/autofotoselesas.jpg";
import AutoDarvazalar from "/autodarvazalar.jpg";
import CamBalkon from "/cambalkon.jpg";
import Pergole from "/pergole.jpg";
import Slaqbaumlar2 from "/slaqbaumlar2.jpg";
import Saunalar from "/saunalar.jpg";


import ProductTitle from "../about/ProductTitle";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const container = {
    visible: {
      transition: {
        //delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    visible: {
      opacity: 1,
      translateY: 0,
    },
    hidden: {
      opacity: 0,
      translateY: 20,
    },
  };

  const photoLinks = [
    {
      id: 1,
      title: BakuDoorSseksional,
      text: t("a"),
      link: "autoseksiyonalqapi",
      hovera: t("garage"),
      hoverb: t("industrial"),
      linkhovera:"autoseksiyonalqapi/autoqaraj",
      linkhoverb:"autoseksiyonalqapi/autosenaye",
    },
    {
      id: 2,
      title: JaluzSistemleri,
      text: t("b"),
      link: "autojaluzqapi",
      hovera: t("blind"),
      hoverb: t("works"),
      linkhovera:"autojaluzqapi/autojaluz",
      linkhoverb:"autojaluzqapi/autojaluzdarvaza",
    },
    {
      id: 3,
      title: AutoFotoselEsas,
      text: t("i"),
      link: "autofotoseldonerqapi",
   
      hovera: t("revolving"),
      hoverb: t("photocell"),
      hoverc: t("hermetic"),
      hoverd: t("circular"),
      linkhovera:"autofotoseldonerqapi/autodoner",
      linkhoverb:"autofotoseldonerqapi/autofotosel",
      linkhoverc:"autofotoseldonerqapi/hermetikxestexanaqapi",
      linkhoverd:"autofotoseldonerqapi/autoyarimdaireviqapi",
    },
    {
      id: 4,
      title: AutoDarvazalar,
      text: t("d"),
      link: "autodarvaza",
      hovera: t("dgates"),
      hoverb: t("cgates"),
      hoverc: t("agates"),
      hoverd: t("bgates"),
      linkhovera:"autodarvaza/avtomatikdemirdarvaza",
      linkhoverb:"autodarvaza/xacilandarvaza",
      linkhoverc:"autodarvaza/doxsanderecedarvaza",
      linkhoverd:"autodarvaza/yanasurusendarvaza",
    },
    {
      id: 5,
      title: Pergole,
      text: t("e"),
      link: "pergoletent",
      hovera: t("epergole"),
      hoverb: t("works"),
      linkhovera:"pergoletent/pergoletentmain",
      linkhoverb:"pergoletent/pergoletentourworks",
    
    },
    {
      id: 6,
      title: CamBalkon,
      text: t("f"),
      link: "autosuse",
      hovera: t("pansystem"),
      hoverb: t("works"),
      linkhovera:"autosuse/panoramasistem",
      linkhoverb:"autosuse/panoramaustunluk",
    },
    {
      id: 7,
      title: Slaqbaumlar2,
      text: t("g"),
      link: "autobaryer",
      hovera: t("vesor"),
      hoverb: t("barrier"),
      linkhovera:"autobaryer/vesor",
      linkhoverb:"autobaryer/slaqbaum",
    },
    {
      id: 8,
      title: Saunalar,
      text: t("h"),
      link: "saunabesetka",
      hovera: t("saunatik"),
      hoverb: t("pavilion"),
      linkhovera:"saunabesetka/sauna",
      linkhoverb:"saunabesetka/besetka",
    },
    {
      id: 9,
      title: Servis,
      text: t("c"),
      link: "servisqurasdirma",
      hovera: t("doorservicehover"),
      hoverb: t("barrierservicehover"),
      linkhovera:"servisqurasdirma/qapiservisqurasdirma",
      linkhoverb:"servisqurasdirma/slaqbaumservisqurasdirma",
    },
  ];

  return (
    <>
      <ProductTitle title={t("productcategory")} />
      <motion.div
        className="container mt-5"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* <div className="row">


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

        </div>  */}
        <div className="row">
          {photoLinks.map((photo) => (
            <motion.div
              key={photo.id}
              className="col-12 text-center col-md-6 col-lg-4"
              variants={item}
            >
              <Card className="my-3 border border-primary rounded-5 p-3 ">
                <div className="position-relative">
                  <img
                    className="m-auto homeCards rounded scale"
                    src={photo.title}
                    alt=""
                    style={{ width: "18rem", height: "18rem" }}
                  />
                   {photo.hoverc ? (
                      
                  <div className="image-overlayb textOverlay">
                    <Link to={photo.linkhovera} ><AiFillRightCircle/>{photo.hovera}</Link>
                    <Link to={photo.linkhoverb} ><AiFillRightCircle/>{photo.hoverb}</Link>
                   <Link to={photo.linkhoverc} ><AiFillRightCircle/>{photo.hoverc}</Link>
                    <Link to={photo.linkhoverd} ><AiFillRightCircle/>{photo.hoverd}</Link>
                  </div>
                  ):(
                    <>
                      <div className="image-overlay textOverlay">
                    <Link to={photo.linkhovera} ><AiFillRightCircle/>{photo.hovera}</Link>
                    <Link to={photo.linkhoverb} ><AiFillRightCircle/>{photo.hoverb}</Link>
                 
                  </div>
                    </>
                  )}


                </div>

                <Card.Body className="">
                  <Card.Title>{photo.text}</Card.Title>

                  <NavLink
                    className="d-inline-flex align-items-center text-decoration-none  mx-3 my-2 bg-primary rounded p-3 text-white"
                    to={photo.link}
                  >
                    {" "}
                    {t("seeproducts")}
                  </NavLink>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <SliderComp />
    </>
  );
}

export default Home;

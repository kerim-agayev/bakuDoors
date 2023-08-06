
import Slider from "react-slick";
import Bond from '../assets/brend/bond.png'
import Beninca from '../assets/brend/beninca.png'
import Cab from '../assets/brend/cab.png'
import Came from '../assets/brend/CAME.png'
import Ditec from '../assets/brend/ditec.png'
import Doco from '../assets/brend/doco.png'
import Dorma from '../assets/brend/dorma.png'
import FacLogo from '../assets/brend/FAAC_LOGO.jpg'
import FlexiForce from '../assets/brend/flexiforce.png'
import Geze from '../assets/brend/GEZE.jpg'
import Somfy from '../assets/brend/SOMFY.png'
import Winsa from '../assets/brend/winsa.png'
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import ProductTitle from "../pages/mainPages/about/ProductTitle";




function SliderComp() {
  const { t } = useTranslation();

  function NextBtn({ onClick }) {



    return (
      <button
       className="d-none  d-md-block position-absolute bottom-0 start-50 translate-middle-x bg-primary d-flex rounded-circle align-items-center justify-content-center width-100 height-100 text-white"
        

        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <NextBtn />,
    // prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
    <div className="container">
    <div className="my-5">
        <h2 className="text-center mb-5">
          <ProductTitle title={t('brend')} />
  
          
          </h2>
        <Slider className="mt-3 mb-3" {...settings}>
          <div>
            <h3>
       <img className='mx-auto  mt-5 mb-5 responsiveImg' src={Bond} alt="" />
            </h3>
          </div>
          <div>
            <h3>
         <img className='mx-auto mt-5 mb-5  responsiveImg' src={Beninca} alt="" />
            </h3>
          </div>
          <div>
            <h3>
          <img className='mx-auto mt-5 mb-5 responsiveImg' src={Came} alt="" />
            </h3>
          </div>
          <div>
            <h3>
      <img className='mx-auto mt-5 mb-5 responsiveImg' src={Cab} alt="" />
            </h3>
          </div>
          <div>
            <h3>
        <img className='mx-auto mt-5 mb-5 responsiveImg' src={Ditec} alt="" />
            </h3>
          </div>
          <div>
            <h3>
            
                    <img className='mx-auto mt-5 mb-5 responsiveImg' src={Dorma} alt="" />
            </h3>
          </div>
          <div>
            <h3>
      <img className='mx-auto mt-5 mb-5 responsiveImg' src={Doco} alt="" />
            </h3>
          </div>
          <div>
            <h3>
          <img className='mx-auto mt-5 mb-5 responsiveImg' src={FacLogo} alt="" />
            </h3>
          </div>
          <div>
            <h3>
          <img className='mx-auto mt-5 mb-5 responsiveImg' src={FlexiForce} alt="" />
            </h3>
          </div>
          <div>
            <h3>
          
              <img className='mx-auto mt-5 mb-5 responsiveImg' src={Geze} alt="" />
            </h3>
          </div>
          <div>
            <h3>
             
              <img className='mx-auto mt-5 mb-5 responsiveImg' src={Somfy} alt="" />
            </h3>
          </div>
          <div>
            <h3>
            
              <img className='mx-auto mt-5 mb-5 responsiveImg' src={Winsa} alt="" />
            </h3>
          </div>
        </Slider>
      </div>
    </div>
    
    </>
  );
}

export default SliderComp;

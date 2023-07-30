import React from "react";
import Slider from "react-slick";
import Bond from '../assets/brend/bond.png'
import Beninca from '../assets/brend/beninca.png'
import Cab from '../assets/brend/cab.png'
import Came from '../assets/brend/Came.png'
import Ditec from '../assets/brend/ditec.png'
import Doco from '../assets/brend/doco.png'
import Dorma from '../assets/brend/dorma.png'
import FacLogo from '../assets/brend/FAAC_LOGO.jpg'
import FlexiForce from '../assets/brend/flexiforce.png'
import Geze from '../assets/brend/geze.jpg'
import Somfy from '../assets/brend/Somfy.png'
import Winsa from '../assets/brend/winsa.png'
import { IoIosArrowForward } from "react-icons/io";




function SliderComp() {


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
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
    <div className="container">
    <div className="my-5">
        <h2 className="text-center mb-5">Brendler</h2>
        <Slider {...settings}>
          <div>
            <h3>
       <img className='mx-auto' src={Bond} alt="" style={{width:'18rem',height:'18rem'}}/>
            </h3>
          </div>
          <div>
            <h3>
         <img className='mx-auto' src={Beninca} alt=""style={{width:'18rem',height:'18rem'}} />
            </h3>
          </div>
          <div>
            <h3>
          <img className='mx-auto' src={Came} alt=""style={{width:'18rem',height:'18rem'}} />
            </h3>
          </div>
          <div>
            <h3>
      <img className='mx-auto' src={Cab} alt=""style={{width:'18rem',height:'18rem'}} />
            </h3>
          </div>
          <div>
            <h3>
        <img className='mx-auto' src={Ditec} alt=""style={{width:'18rem',height:'18rem'}} />
            </h3>
          </div>
          <div>
            <h3>
            
                    <img className='mx-auto' src={Dorma} alt=""style={{width:'18rem',height:'18rem'}} />
            </h3>
          </div>
          <div>
            <h3>
      <img className='mx-auto' src={Doco} alt=""style={{width:'18rem',height:'18rem'}} />
            </h3>
          </div>
          <div>
            <h3>
          <img className='mx-auto' src={FacLogo} alt="" style={{width:'18rem',height:'18rem'}}/>
            </h3>
          </div>
          <div>
            <h3>
          <img className='mx-auto' src={FlexiForce} alt=""style={{width:'18rem',height:'18rem'}} />
            </h3>
          </div>
          <div>
            <h3>
          
              <img className='mx-auto' src={Geze} alt=""style={{width:'18rem',height:'18rem'}} />
            </h3>
          </div>
          <div>
            <h3>
             
              <img className='mx-auto' src={Somfy} alt="" style={{width:'18rem',height:'18rem'}}/>
            </h3>
          </div>
          <div>
            <h3>
            
              <img className='mx-auto' src={Winsa} alt="" style={{width:'18rem',height:'18rem'}}/>
            </h3>
          </div>
        </Slider>
      </div>
    </div>
    
    </>
  );
}

export default SliderComp;

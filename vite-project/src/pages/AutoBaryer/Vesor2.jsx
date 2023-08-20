import VesorPhoto from '/vesor.jpg'
import VesorPhoto2 from '/beninca.jpg'
import VesorPhoto3 from '/beninca2.jpg'
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
function Vesor2() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isinview = useInView(ref);
  const isinview2 = useInView(ref2);
  const isinview3 = useInView(ref3);
  const isinview4 = useInView(ref4);
  const maincontrols = useAnimation();
  const maincontrols2 = useAnimation();
  const maincontrols3 = useAnimation();
  const maincontrols4 = useAnimation();
  useEffect(() => {
    if (isinview) {
      maincontrols.start("visible");
    }
    if (isinview2) {
      maincontrols2.start("visible");
    }

    if (isinview3) {
      maincontrols3.start("visible");
    }
    if (isinview4) {
      maincontrols4.start("visible");
    }
  }, [isinview, isinview2, isinview3, isinview4]);
  return (
    <>

<div className="container">
<div className="row mt-5 vheight">
        <h4 className='productHead '>VESOR</h4>
        <div className="col-12 col-lg-8 mt-5">
        <div className=" d-none d-lg-block borderslaq" >
  <img src={VesorPhoto} className=" head shadow objCover rounded" alt="..."/>
 
</div>
<div className=" d-lg-none" >
  <img src={VesorPhoto} className=" head shadow objCover rounded" alt="..."/>
 
</div>
        </div>
        <div className="col-12 col-lg-4 d-none d-lg-block  mt-5 mt-md-0 rounded ">
        <div className=" ps-3">
  <p className="mt-2 mt-lg-5 headText bg-danger  text-white p-3 rounded">
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsam quia consequatur reiciendis nulla nisi repudiandae magnam eligendi sit eveniet molestiae perspiciatis, cumque harum aliquid vel accusantium voluptatum laudantium voluptatem.
  </p>
</div>
        </div>
        <div className="col-12 col-lg-4 shadow-lg d-lg-none mt-5 mt-md-3 rounded bg-danger  text-white p-3 rounded">
        <div className=" ps-3">
  <p className="mt-2 mt-lg-5 headText ">
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ipsam quia consequatur reiciendis nulla nisi repudiandae magnam eligendi sit eveniet molestiae perspiciatis, cumque harum aliquid vel accusantium voluptatum laudantium voluptatem.
  </p>
</div>
        </div>
    </div>

   <div className="row mt-5 ">
  <motion.div className="col-12 col-lg-6 mb-2"
  ref={ref}
  variants={{
    hidden: { opacity: 0, translateX: -300 },
    visible: { opacity: 1, translateX: 0 },
  }}
  initial="hidden"
  animate={maincontrols}
  transition={{ duration: 1 }}
  >
    <img className='objfill head rounded ' src={VesorPhoto2} alt="" />
  </motion.div>
  <motion.div className="col-12 col-lg-6 bg-info p-3 rounded"
  ref={ref2}
  variants={{
    hidden: { opacity: 0, translateX: 300 },
    visible: { opacity: 1, translateX: 0 },
  }}
  initial="hidden"
  animate={maincontrols2}
  transition={{ duration: 1 }}
  >
<h4 className='text-white'>Lorem ipsum dolor sit amet.</h4>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis autem veniam beatae voluptate hic tenetur dolore porro vero sed ipsam nesciunt esse enim.

</p>
  </motion.div>
   </div>
   <div className="row mt-5 mb-5">

  <motion.div className="col-12 col-lg-6 bg-info p-2 rounded mb-2"
  ref={ref3}
  variants={{
    hidden: { opacity: 0, translateX: -300 },
    visible: { opacity: 1, translateX: 0 },
  }}
  initial="hidden"
  animate={maincontrols3}
  transition={{ duration: 1 }}
  >
<h4 className='text-white'>Lorem ipsum dolor sit amet</h4>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis autem veniam beatae voluptate hic tenetur dolore porro vero sed ipsam nesciunt esse enim.

</p>
  </motion.div>
  <motion.div className="col-12 col-lg-6"
  ref={ref4}
  variants={{
    hidden: { opacity: 0, translateX: 300 },
    visible: { opacity: 1, translateX: 0 },
  }}
  initial="hidden"
  animate={maincontrols4}
  transition={{ duration: 1 }}
  
  >
    <img className='rounded objCover head' src={VesorPhoto3} alt="" />
  </motion.div>
   </div>
   <hr />
</div>

    </>
  )
}

export default Vesor2
import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


function LazyImage({id, src}) {
  const [inview, setInView] = useState(false);
  const ref7 = useRef(null)
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
    
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref7.current) {
      observer.observe(ref7.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return inview ? (
<LazyLoadImage 
  effect="blur" 
  src={src} 
  alt="..."
  className="card-img-top objectFit responsiveImg rounded"/>
  ) : (
    <div id={id} ref={ref7} className="image-placeholder"></div>
  )
}

export default LazyImage;

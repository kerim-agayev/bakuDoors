
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const SmoothSliderButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsVisible(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="smooth-slider-button-container">
      {isVisible && (
        <button
          className="smooth-slider-button btn btn-primary rounded-circle "
          onClick={handleClick}
        >
          <FaArrowCircleUp />
        </button>
      )}
    </div>
  );
};

export default SmoothSliderButton;
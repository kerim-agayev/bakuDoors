import {motion} from 'framer-motion'
import {BsFillArrowRightCircleFill, BsFillArrowDownCircleFill} from "react-icons/bs";
import { useState } from "react";
import ProductTitle from "../about/ProductTitle";
import { useTranslation } from 'react-i18next';
function Questions() {
  const {t} = useTranslation()
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question:t('s1'),
      answer: t('q1'),
    },
    {
      question:t('s2'),
      answer: t('q2'),
    },
    {
      question:t('s3'),
      answer: t('q3'),
    },
    {
      question:t('s4'),
      answer: t('q4'),
    },
    {
      question:t('s5'),
      answer: t('q5'),
    },
  ];

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
    <div className="container">
    <motion.div className="motion vh mb-5"
   initial={{opacity:0 , scale:0.5}}
   animate={{opacity:1, scale:1}}

  
    transition={{delay:0.2,duration:1}}
    >
    <div>
        <ProductTitle title={t('frquestions')} />
      </div>
      <div className="container bg-primary text-white rounded p-3 mb-5">
        {questions.map((q, index) => (
          <div key={index} className="my-4">
            <h4
              className="my-2 cursor-pointer hoverCursor"
              onClick={() => handleClick(index)}
            >
              <BsFillArrowDownCircleFill
                size={20}
                className="mx-2 text-black "
              />
              {q.question}
            </h4>
            {activeIndex === index && (
              <p className="border-bottom pb-2 hoverCursor">
                <BsFillArrowRightCircleFill
                  size={20}
                  className="mx-2 text-black "
                />
                {q.answer}
              </p>
            )}
          </div>
        ))}
      </div>



    </motion.div>
    <hr />
    </div>
 

    </>
  );
}

export default Questions;
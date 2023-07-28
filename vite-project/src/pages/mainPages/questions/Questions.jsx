import {motion} from 'framer-motion'

import {BsFillArrowRightCircleFill, BsFillArrowDownCircleFill} from "react-icons/bs";

import { useState } from "react";
import ProductTitle from "../about/ProductTitle";

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "Sual 1",
      answer: "Cavab 1",
    },
    {
      question: "Sual 2",
      answer: "Cavab 2",
    },
    {
      question: "Sual 3",
      answer: "Cavab 3",
    },
    {
      question: "Sual 4",
      answer: "Cavab 4",
    },
    {
      question: "Sual 5",
      answer: "Cavab 5",
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
    <motion.div className="motion"
   initial={{opacity:0 , scale:0.5}}
   animate={{opacity:1, scale:1}}

  
    transition={{delay:0.2,duration:1}}
    >
    <div>
        <ProductTitle title="  Çox Verilən Suallar" />
      </div>
      <div className="container bg-primary text-white rounded p-3">
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
 
    </>
  );
}

export default Questions;
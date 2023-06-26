import { useState } from "react";
import styles from "@/styles/Carousel.module.css";
import { MdOutlineNavigateNext } from "react-icons/md";

interface ITextCarousel {
  quotes: string[];
}

const TextCarousel = ({ quotes }: ITextCarousel) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleSelect = (action: string) => {
    let nextStep = action === "dec" ? activeStep - 1 : activeStep + 1;
    if (nextStep < 0) {
      nextStep = quotes.length - 1;
    }

    if (nextStep > quotes.length - 1) {
      nextStep = 0;
    }
    setActiveStep(nextStep);
  };
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.textContainer}>
        <div className={styles.navigator} onClick={() => handleSelect("dec")}>
          <MdOutlineNavigateNext size={50} style={{ transform: "rotate(180deg)" }} color="#fff" />
        </div>
        <div>
          <p className={styles.quote}>{quotes[activeStep]}</p>
        </div>
        <div className={styles.navigator} onClick={() => handleSelect("inc")}>
          <MdOutlineNavigateNext size={50} color="#fff" />
        </div>
      </div>
      <div className={styles.counter}>
        {quotes.map((val, ind) => (
          <span
            className={`${styles.steps} ${
              activeStep === ind ? `${styles.activeStep}` : ""
            }`}
            onClick={() => setActiveStep(ind)}
            key={ind}
          >
            {ind}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;

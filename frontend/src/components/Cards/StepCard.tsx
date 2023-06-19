import { Container } from "react-bootstrap";
import styles from "@/styles/StepCard.module.css";

interface IStepCard {
    step: number,
    heading: string,
    description: string
}

const StepCard = ({ step, heading, description }: IStepCard) => {
  return (
    <Container className={styles.cardContainer}>
      <div className={styles.headerSection}>
        <div className={styles.step}>{step}</div>
      </div>
      <div className={styles.textSection}>
        <h3 className={styles.mainHeading}>{heading}</h3>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </Container>
  );
};

export default StepCard;

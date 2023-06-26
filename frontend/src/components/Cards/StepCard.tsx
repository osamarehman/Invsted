import { Button, Container } from "react-bootstrap";
import styles from "@/styles/StepCard.module.css";
import Link from "next/link";

interface IStepCard {
  step: number;
  heading: string;
  description: string;
  color: string;
  linkText?: string;
  linkHref?: string;
  bgColor?: string;
}

const StepCard = ({
  step,
  heading,
  description,
  color,
  linkText,
  linkHref = "",
  bgColor = "",
}: IStepCard) => {
  const stepColor: { [key: string]: string } = {
    blue: styles.textBlue,
    green: styles.textGreen,
    yellow: styles.textYellow,
  };
  const stepBG: { [key: string]: string } = {
    blue: styles.bgBlue,
    green: styles.bgGreen,
    yellow: styles.bgYellow,
  };
  return (
    <Container className={styles.cardContainer}>
      <div className={styles.headerSection}>
        <div className={`${styles.step} ${stepColor[color]}`}>{step}</div>
      </div>
      <div className={styles.textSection}>
        <h3 className={styles.mainHeading}>{heading}</h3>
        <p className={styles.description}>{description}</p>
        {linkText && <Link className={`${styles.linkBtn} ${stepBG[bgColor]}`} href={linkHref} >{linkText}</Link>}
      </div>
    </Container>
  );
};

export default StepCard;

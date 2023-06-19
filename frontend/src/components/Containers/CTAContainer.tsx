import { Container } from "react-bootstrap";
import styles from "@/styles/CTAContainer.module.css";
import Link from "next/link";

const CTAContainer = () => {
  return (
    <Container className={styles.container}>
      <div className={`d-flex ${styles.flexContainer}`}>
        <h3 className={styles.heading}>Become part of our community</h3>
        <div className={styles.ctaContainer}>
          <Link href="/" className={`${styles.btn} ${styles.link1}`}>
            Learn More
          </Link>
          <Link href="/" className={`${styles.btn} ${styles.link2}`}>
            Join Now
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default CTAContainer;

import styles from "@/styles/FAQSection.module.css";
import { Container } from "react-bootstrap";

const FAQSection = () => {
  return (
    <>
      <section id="FAQ-header" className={styles.faqHeaderSection}>
        <Container className={styles.faqHeaderContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>
              Frequently Asked<br />
              <span className={styles.subText}>
                <strong>Questions</strong>
              </span>
            </h1>
          </div>
        </Container>
      </section>
      <section id="faq-section" className={styles.faqSection} >
        <Container className={styles.faqContainer} >

        </Container>
      </section>
    </>
  );
};

export default FAQSection;

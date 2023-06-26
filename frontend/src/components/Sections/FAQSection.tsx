import styles from "@/styles/FAQSection.module.css";
import { Button, Container } from "react-bootstrap";
import Accordion from "@/components/Sections/Accordion";
import { invstedFAQs, studentFAQs, investorFAQs } from "@/config/faqConfig";
import { useState } from "react";

const FAQSection = () => {
  const [faqs, setFaqs] = useState(invstedFAQs);
  return (
    <>
      <section id="FAQ-header" className={styles.faqHeaderSection}>
        <Container className={styles.faqHeaderContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>
              Frequently Asked
              <br />
              <span className={styles.subText}>
                <strong>Questions</strong>
              </span>
            </h1>
          </div>
        </Container>
      </section>
      <section id="faq-section" className={styles.faqSection}>
        <Container className={styles.faqContainer}>
          <div className={styles.btnContainer}>
            <button
              onClick={() => setFaqs(invstedFAQs)}
              className={`${styles.btn} ${
                faqs[0].headingColor === "green" ? `${styles["green-bg"]}` : `${styles["white-bg"]}`
              }`}
            >
              Invsted FAQ
            </button>
            <button
              onClick={() => setFaqs(studentFAQs)}
              className={`${styles.btn} ${
                faqs[0]["headingColor"] === "yellow"
                  ? `${styles["yellow-bg"]}`
                  : `${styles["white-bg"]}`
              }`}
            >
              Students FAQ
            </button>
            <button
              onClick={() => setFaqs(investorFAQs)}
              className={`${styles.btn} ${
                faqs[0]["headingColor"] === "blue" ? `${styles["blue-bg"]}` : `${styles["white-bg"]}`
              }`}
            >
              Investors FAQ
            </button>
          </div>
          <div className={styles.faqs}>
            {faqs.map((faq, _idx: number) => (
              <Accordion
                key={faq.id}
                titleStyle={styles[faq.headingColor]}
                headerStyle={styles.headerStyle}
                containerStyle={styles.containerStyle}
                bodyStyle={styles.bodyStyle}
                items={[
                  {
                    id: faq.id,
                    title: faq.title,
                    content: faq.content,
                  },
                ]}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default FAQSection;

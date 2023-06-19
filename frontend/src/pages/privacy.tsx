import Footer from "@/components/Layout/Footer";
import Accordion from "@/components/Sections/Accordion";
import { privacyConfigs } from "@/config/faqConfig";
import styles from "@/styles/Privacy.module.css";
import { Button, Container } from "react-bootstrap";

export default function PrivacyPage() {
  return (
    <div className={styles.privacyContainer}>
      <div className={styles.separatorContainer}>
        <div className={styles.separator} />
      </div>
      <section className={styles.privacySection}>
        <Container className={styles.container}>
          <div className={styles.privacyContents}>
            <div className={styles.textSection}>
              <h1 className={styles.heading}>Privacy Policy</h1>
              <div className={styles.spacer}></div>
              <p className={styles.description}>Last updated August 2022</p>
            </div>
            <div>
              <div className={styles.btnContainer}>
                <Button className={styles.btn}>Privacy Policy</Button>
              </div>
              <div className={styles.privacy}>
                {privacyConfigs.map((faq, _idx: number) => (
                  <Accordion
                    key={faq.id}
                    titleStyle={styles.blue}
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
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

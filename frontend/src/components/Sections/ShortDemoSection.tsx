import { InvstEdShortDemoLink } from "@/config";
import styles from "@/styles/ShortDemoSection.module.css";
import { Container } from "react-bootstrap";
import IFrameContainer from "@/components/Containers/IFrameContainer";


const ShortDemoSection = () => {
    return (
        <section id="short-demo-section" className={styles.shortDemoSection}>
        <Container className={styles.shortDemoContainer}>
          <div className={styles.textSection}>
            <h6 className={styles.sectionSubHeading}>Learn more</h6>
            <h3 className={styles.sectionHeading}>How does it work?</h3>
            <p className={styles.description}>Watch the video below to understand how to join invstED and use our platform</p>
          </div>
          <IFrameContainer IframeSrc={InvstEdShortDemoLink} />
        </Container>
      </section>
    )
}

export default ShortDemoSection;

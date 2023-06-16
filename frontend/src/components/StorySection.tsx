import { Container } from "react-bootstrap";
import styles from "@/styles/StorySection.module.css";
import IFrameContainer from "./IFrameContainer";
import { InvstedStoryLink } from "@/config";

const StorySection = () => {
  return (
    <section id="story-section" className={styles.storySection}>
      <Container className={styles.storyContainer}>
        <div className={styles.textSection}>
          <h3 className={styles.mainHeading}>Learn more about us</h3>
          <p className={styles.description}>
            Watch the video below to hear from our CEO Brianna and see why we
            created invstED
          </p>
        </div>
        <IFrameContainer IframeSrc={InvstedStoryLink} maxWidth="unset" />
        <div>
          <div className={styles.textSection} style={{ marginTop: 40 }}>
            <h3 className={styles.mainHeading}>Our Story</h3>
            <p className={styles.subHeading}>
              <strong>
                Our CEO Brianna faced the same challenges our students face
                every day
              </strong>
            </p>
          </div>
          <div></div>
        </div>
      </Container>
    </section>
  );
};

export default StorySection;

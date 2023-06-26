import { Container } from "react-bootstrap";
import styles from "@/styles/StorySection.module.css";
import IFrameContainer from "@/components/Containers/IFrameContainer";
import { InvstedStoryLink } from "@/config";
import StepCard from "@/components/Cards/StepCard";

interface IStorySection {
  maxWidth?: "unset" | number
}

const StorySection = ({maxWidth = "unset"}:IStorySection) => {
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
        <IFrameContainer IframeSrc={InvstedStoryLink} maxWidth={maxWidth} />
        <div className={styles.storyTextContainer}>
          <div className={styles.textSection} style={{ marginTop: 40 }}>
            <h3 className={styles.mainHeading}>Our Story</h3>
            <p className={styles.subHeading}>
              <strong>
                Our CEO Brianna faced the same challenges our students face
                every day
              </strong>
            </p>
          </div>
          <div className={styles.cardContainer}>
            <StepCard
              step={1}
              color={"blue"}
              heading={"Raised by a single mother and grew up in poverty"}
              description={
                `Like Brianna, millions of high-achieving, low-income students across 
                the US and UK experience massive culture shock when moving from the poverty 
                of home to the privilege of a university campus.`
              }
            />
            <StepCard
              step={2}
              color={"green"}
              heading={"Faced food insecurity, housing instability and homelessness"}
              description={
                `Eight million US and UK university students live in poverty and face food & 
                housing insecurity, just as Brianna did. These challenges don't disappear simply 
                because a student makes it to college.`
              }
            />
            <StepCard
              step={3}
              color={"yellow"}
              heading={"Worked multiple jobs to afford school & support her family"}
              description={
                `Brianna worked multiple jobs during college to afford school and basic necessities, 
                and she isn't alone. Of the almost 17 million US college students, over 13 million 
                work, and half of those live in poverty.`
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StorySection;

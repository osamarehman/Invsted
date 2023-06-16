import Card from "@/components/Card";
import HeroBanner from "@/components/HeroBanner";
import InfoSection from "@/components/InfoSection";
import NavBar from "@/components/NavBar";
import NotificationBar from "@/components/NotificationBar";
import ShortDemoSection from "@/components/ShortDemoSection";
import StorySection from "@/components/StorySection";
import { InvstEdShortDemoLink } from "@/config";
import styles from "@/styles/App.module.css";
import { Container } from "react-bootstrap";
import InfoImage1 from "../assets/images/info-image-1.png";
import InfoImage2 from "../assets/images/info-image-2.png";
import InfoImage3 from "../assets/images/info-image-3.png";

export default function Home() {
  return (
    <div>
      <NotificationBar
        text={<>Not sure who to donate to? <strong>Donate to our Equity Fund</strong></>}
        linkText="Learn More"
      />
      <NavBar />
      <HeroBanner />
      <section
        id="getting-started-section"
        className={styles.gettingStartedSection}
      >
        <Container className={styles.gettingStartedContainer}>
          <div className={styles.pricingSection}>
            <Card
              type="Students"
              title="We know every little bit makes a difference."
              description="invstED allows others to provide the every day support you need so you can focus on school, not your struggles."
              backgroundColor="#ffe000"
            />
            <Card
              type="Investors"
              title="Through invstED, giving is easier and more impactful."
              description="‍Get connected to high-potential students in need of financial support, so you can give in ways that matter."
              backgroundColor="#31c1ff"
            />
          </div>
        </Container>
      </section>
      <InfoSection
        src={InfoImage1}
        title={"What is the problem?"}
        top="-100px"
        left="-80px"
        textNode={
          <strong className="bold-text-6">
            For most low-income students, support comes from scholarships,
            bursaries  loans. This amounts to an average of £580/$667 a
            month.
            <br />
            <br />
            However, student costs far exceed their support, with food, rent,
            books &amp; other expenses averaging £909/$1045 a
            month.
            <br />
            <br />
            Students face an average gap of £329/$379 a month between what they
            have and what they need. This is what we aim to fill at invstED.
          </strong>
        }
        justifyContent="end"
        backgroundColor="#ffe000"
        titleColor="#000"
      />
      <InfoSection
        src={InfoImage2}
        title={"How does our platform work?"}
        top="-75px"
        right="-100px"
        textNode={
          <strong className="bold-text-6">
            When you join invstED, you can choose between donating to a 
            specific student or to our Equity Fund. 
            <br />
            <br />
            If you choose a student, you can support them in one of the 
            many ways we have available including a once-off amount or monthly 
            recurring donations.
          </strong>
        }
        justifyContent="start"
        backgroundColor="#31c1ff"
        titleColor="#fff"
      />
      <InfoSection
        src={InfoImage3}
        title={"Where does your money go?"}
        top="0px"
        left="-50px"
        textNode={
          <strong className="bold-text-6">
            When you join invstED, you can choose between donating to a 
            specific student or to our Equity Fund. 
            <br />
            <br />
            If you choose a student, you can support them in one of the 
            many ways we have available including a once-off amount or monthly 
            recurring donations.
          </strong>
        }
        justifyContent="end"
        backgroundColor="#ffe000"
        titleColor="#fff"
      />
      <ShortDemoSection />
      <StorySection />
    </div>
  );
}

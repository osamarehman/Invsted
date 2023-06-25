import Layout from "@/components/Layout/Layout";
import styles from "@/styles/Students.module.css";
import StudentHomeImage from "@/assets/images/student-home.jpg";
import StudentHomeImage21 from "@/assets/images/student-home-21.png";
import StudentHomeImage22 from "@/assets/images/student-home-22.png";
import StudentHomeImage23 from "@/assets/images/student-home-23.png";
import StudentHomeImage3 from "@/assets/images/student-home-3.png";
import StudentHomeImage4 from "@/assets/images/student-home-4.png";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import StepsContainer from "@/components/Containers/StepsContainer";

export default function StudentsHome() {
  return (
    <Layout>
      <StepsContainer
        subTitle="No one does it alone"
        title="Welcome to our community"
        strongText="At invstED, we know every little bit makes a difference."
        normalText="Our platform allows others to provide the every day support you need so you can focus on school, not your struggles"
        linkText="Learn More"
        link="/about"
        linkStyle={styles.width100}
        src={StudentHomeImage}
      />
      <StepsContainer
        subTitle="Step One"
        title="Create your profile"
        strongText="Fill out our form to build your profile, sharing your interests, passions, and experiences."
        normalText="You choose how much you share and what you put on your profile!"
        linkText="Create Profile"
        link="/student-quiz"
        containerStyle={`${styles.reverse} ${styles.gap}`}
        linkStyle={styles.widthFitContent}
        sectionStyle={`${styles.bgGrey} ${styles.height600}`}
        titleStyle={styles.titleSteps}
      >
        <div className={styles.gallery}>
          <Image className={`${styles.galleryImg} ${styles.customImage1}`} alt="create-profile-gallery" src={StudentHomeImage21} />
          <Image className={`${styles.galleryImg} ${styles.customImage2}`} alt="create-profile-gallery" src={StudentHomeImage22} />
          <Image className={`${styles.galleryImg} ${styles.customImage3}`} alt="create-profile-gallery" src={StudentHomeImage23} />
        </div>
      </StepsContainer>
      <StepsContainer
        subTitle="Step Two"
        title="Provide your bank info"
        strongText="Share your bank information, so donations can be sent directly to you."
        normalText="All your information will be stored and secured in Stripe."
        linkText="Bank Info"
        link="/student-profile"
        src={StudentHomeImage3}
        containerStyle={styles.gap}
        linkStyle={styles.widthFitContent}
        titleStyle={styles.titleSteps}
        imageStyle={styles.smallImage}
      />
      <StepsContainer
        subTitle="Step Three"
        title="Share your profile"
        strongText="Once your profile has been published, you can share with your friends and family."
        normalText="You can find and share with your network, creating an easy way for others to support you"
        linkText="Share Now"
        link="/give"
        src={StudentHomeImage4}
        containerStyle={`${styles.reverse} ${styles.gap}`}
        sectionStyle={styles.bgGrey}
        linkStyle={styles.widthFitContent}
        titleStyle={styles.titleSteps}
        imageStyle={styles.smallImage}
      />
    </Layout>
  );
}

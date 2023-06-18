import Image from "next/image";
import { Container } from "react-bootstrap";
import AboutImage1 from "@/assets/images/about-image-1.jpg";
import AboutImage2 from "@/assets/images/about-image-2.jpg";
import AboutImage3 from "@/assets/images/about-image-3.jpg";
import styles from "@/styles/AboutUsSection.module.css";

const AboutUsSection = () => {
  return (
    <section id="about-us" className={styles.aboutSection} >
      <Container className={styles.aboutContainer}>
        <div className={styles.textSection}>
          <h6 className={styles.subHeading}>About Us</h6>
          <h1 className={styles.heading}>
            Investing in <br />
            the future
          </h1>
          <p className={styles.description}>
            We started invstED because we believe every student deserves to be
            invested in, and every investor deserves to see the impact of their
            giving.
          </p>
        </div>
        <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={AboutImage1} alt="about-section-image" />
                <Image className={styles.image} src={AboutImage2} alt="about-section-image" />
                <Image className={styles.image} src={AboutImage3} alt="about-section-image" />
            </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;

import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "@/styles/StudentQuiz.module.css";
import QuizContainer from "@/components/Containers/QuizContainer";
import InvstedBackground from "@/assets/images/invsted-bg-img.png";
import InvstedLogo from "@/assets/images/invsted-logo.png";
import Image from "next/image";

export default function StudentQuiz() {
  return (
    <Layout>
      <section id="quiz-header" className={styles.headerSection}>
        <Container className={styles.headerContainer}>
          <div className={styles.textSection}>
            <h2 className={styles.heading}>Create your profile</h2>
            <p className={styles.description}>
              Once you fill out the form below, your profile will be submitted
              for review. We will let you know once your profile is live on the
              site, which should be within one week of submission.
            </p>
            <Link className={styles.link} href="/student-bank-info">
              Step Two
            </Link>
          </div>
        </Container>
      </section>
      <QuizContainer
        headerSection={
          <Image className={styles.quizImg} src={InvstedBackground} alt="Invsted background image" />
        }
      >
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={InvstedLogo} alt="Invsted Logo" />
        </div>
        <div className={styles.formText}>
          <h2 className={styles.formHeading}>Student Profile</h2>
          <p className={styles.formDescription}>
            Please fill out this form to complete your profile. <br /> <br />
            For the profile questions, you can choose which questions you want
            to answer and have displayed on your profile. Please choose 3-5 and
            provide answers no more than 350 words.
          </p>
        </div>
        <div></div>
      </QuizContainer>
    </Layout>
  );
}

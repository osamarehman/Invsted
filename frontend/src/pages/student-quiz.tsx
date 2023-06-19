import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "@/styles/StudentQuiz.module.css";

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
            <Link className={styles.link} href="/student-bank-info">Step Two</Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

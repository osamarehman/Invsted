import Layout from "@/components/Layout/Layout";
import styles from "@/styles/Investors.module.css";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Investors() {
  return (
    <Layout>
      <section className={styles.stepSection}>
        <Container className={styles.stepContainer}>
          <div className={styles.bgInvestor}></div>
          <div className={styles.textSection}>
            <h6 className={`${styles.smallHeading} ${styles.textWhite}`}>
              INVESTORS
            </h6>
            <h1 className={`${styles.heading} ${styles.textWhite}`}>
              IT PAYS <br /> TO GIVE
            </h1>
            <Link
              className={`${styles.link} ${styles.textWhite} ${styles.borderBottomWhite}`}
              href="/signup"
            >
              Invest in someone today
            </Link>
            <Link
              className={`${styles.linkBtn} ${styles.bgWhite}`}
              href="/signup"
            >
              Join Now
            </Link>
          </div>
        </Container>
      </section>
      <section className={`${styles.stepSection} ${styles.marginTop100}`}>
        <Container className={`${styles.stepContainer} flex-column`}>
          <div className={styles.sectionTitleWide}>
            <h1 className={`${styles.heading} ${styles.textBlue}`}>Why invstED?</h1>
            <p className={styles.sectionTitleDesc}>
              We believe in the power of investing in others. <br /> <br />
              We believe giving is an investment tool that can transform
              outcomes for ourselves, for the next generation and for the world.
            </p>
          </div>
          <div className={styles.sectionDescriptionWide}>
            <h2 className={`${styles.sectionDesc} ${styles.textBlue}`}>
              At invstED, we aim to make it easier to give & feel as if every
              gift, no matter how small, makes a difference.
            </h2>
          </div>
        </Container>
      </section>
      <section className={styles.stepSection}>
        <Container className={styles.stepContainer}>

        </Container>
      </section>
    </Layout>
  );
}

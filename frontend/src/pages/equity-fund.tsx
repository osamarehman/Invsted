import StepsContainer from "@/components/Containers/StepsContainer";
import Layout from "@/components/Layout/Layout";
import EquityFundHomeImg from "@/assets/images/equity-fund-home.jpg";
import EquityFundDonateImg from "@/assets/images/equity-fund-donate.jpg";
import EquityFundShareImg from "@/assets/images/equity-fund-share.png";
import EquityDonateImg from "@/assets/images/investor-home-donate.jpg";
import styles from "@/styles/EquityFund.module.css";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default function EquityFund() {
  return (
    <Layout>
      <StepsContainer
        isTextSection={false}
        containerStyle={styles.justifyStepAround}
      >
        <div className={styles.headerTextSection}>
          <h6 className={`${styles.subHeading} ${styles.textBlue}`}>
            Make the biggest impact
          </h6>
          <h3 className={`${styles.heading} ${styles.textBlue}`}>
            Donate to our Equity Fund
          </h3>
          <div className={styles.listSection}>
            <div className={styles.list}>
              <div className={`${styles.listDisc} ${styles.bgBlue}`}></div>
              <div className={styles.listText}>
                Your donation goes into the Equity Fund, which actively works
                toward equity in giving
              </div>
            </div>
            <div className={styles.list}>
              <div className={`${styles.listDisc} ${styles.bgBlue}`}></div>
              <div className={styles.listText}>
                We use Equity Fund resources to combat biases such as racial or
                pretty bias
              </div>
            </div>
            <div className={styles.list}>
              <div className={`${styles.listDisc} ${styles.bgBlue}`}></div>
              <div className={styles.listText}>
                Equity Fund resources are distributed amongst students based on
                need and giving patterns
              </div>
            </div>
            <div className={styles.list}>
              <div className={`${styles.listDisc} ${styles.bgBlue}`}></div>
              <div className={styles.listText}>
                By donating to the Equity Fund, you know you are helping the
                students in the most need
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerImageSection}>
          <Image
            className={styles.image}
            src={EquityFundHomeImg}
            alt="Equity fund home image"
          />
          <div className={styles.imageFooter}>
            <div className={styles.imageCard}>
              <h3 className={`${styles.heading} ${styles.imageHeading}`}>
                Equity Fund
              </h3>
              <Link
                className={styles.linkBtn}
                href="https://buy.stripe.com/dR6g1x2OvfvP1ocdQT"
              >
                Donate Today
              </Link>
            </div>
          </div>
        </div>
      </StepsContainer>
      <StepsContainer
        containerStyle={`${styles.justifyStepAround}`}
        sectionStyle={styles.bgGrey}
        imageStyle={``}
        src={EquityDonateImg}
        isTextSection={false}
      >
        <div className={styles.headerTextSection}>
          <h1 className={`${styles.heading} ${styles.textBlue}`}>
            What is an Equity Fund?
          </h1>
          <div className={`${styles.listSection} ${styles.borderList}`}>
            <h6 className={styles.smallHeading}>
              We are driven by a fundamental belief in equity
            </h6>
            <p>
              While we do not live in an equitable world, every effort made and
              every dollar spent toward equity has a compounding effect and
              creates exponential impact and benefits.
            </p>
          </div>
          <div className={`${styles.listSection} ${styles.borderList}`}>
            <h6 className={styles.smallHeading}>
              Actively counter common biases
            </h6>
            <p>
              Rather than donating to a specific student, you can instead choose
              to donate directly to our Equity Fund. This pool of money is
              designed to counter biases and work actively toward equity.
            </p>
          </div>
          <div className={`${styles.listSection} ${styles.borderList}`}>
            <h6 className={styles.smallHeading}>
              Give to students who need support the most
            </h6>
            <p>
              When you donate to our Equity Fund, we take your donation and
              distribute it to students who need support but might not be
              getting invested in.
            </p>
          </div>
        </div>
      </StepsContainer>
      <StepsContainer
        containerStyle={`${styles.justifyStepAround} ${styles.reverse}`}
        src={EquityFundDonateImg}
        isTextSection={false}
      >
        <div className={styles.headerTextSection}>
          <h6 className={`${styles.subHeading} ${styles.textBlue}`}>
            Equity Fund
          </h6>
          <h1 className={styles.heading}>Donate Today</h1>
          <p>
            Choose a recurring or one-time donation to our Equity Fund, and know
            your money is going to the students most in need
          </p>
          <div className={styles.linkContainer}>
            <Link
              className={`${styles.linkBtn} ${styles.bgBlue} ${styles.donationButton}`}
              href={"https://donate.stripe.com/8wM2aHbl1abv2sg289"}
            >
              Recurring Donations
            </Link>
            <Link
              className={`${styles.linkBtn} ${styles.bgGreen} ${styles.donationButton}`}
              href={"https://buy.stripe.com/dR6g1x2OvfvP1ocdQT"}
            >
              One Time Donation
            </Link>
          </div>
        </div>
      </StepsContainer>
      <section className={`${styles.shareInvstedSection} ${styles.marginTop100}`} id="share-invsted">
        <Container className={styles.shareInvstedContainer}>
          <div className={`${styles.shareInvsted} ${styles.bgBlue}`}>
            <div className={styles.shareInvstedText}>
              <h3 className={`${styles.heading} ${styles.textWhite}`}>Share invstED</h3>
              <p className={styles.maxWidth400}>
                Learn more about invstED, meet our team, and read about our
                mission and story
              </p>
              <Link className={`${styles.linkBtn} ${styles.bgWhite} ${styles.shareBtn}`} href="/about">Learn More</Link>
            </div>
            <Image className={`${styles.image} ${styles.shareImage}`} src={EquityFundShareImg} alt="invsted share image" />
          </div>
        </Container>
      </section>
    </Layout>
  );
}

import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { Container, Button } from "react-bootstrap";
import styles from "@/styles/StudentQuiz.module.css";
import QuizContainer from "@/components/Containers/QuizContainer";
import InvstedBackground from "@/assets/images/invsted-bg-img.png";
import InvstedLogo from "@/assets/images/invsted-logo.png";
import Image from "next/image";
import FormInputField from "@/components/form/FormInputField";
import FormCheckboxField from "@/components/form/FormCheckboxField";
import GridContainer from "@/components/Containers/GridContainer";
import {
  identityTags,
  interestTags,
  passionTags,
} from "@/config/formFieldConfig";
import NotificationBar from "@/components/Sections/NotificationBar";

export default function InvestorQuiz() {
  return (
    <div>
      <NotificationBar
        text={
          <>
            Not sure who to donate to?{" "}
            <strong>Donate to our Equity Fund</strong>
          </>
        }
        linkText="Learn More"
      />
      <Layout>
        <section id="quiz-header" className={styles.investorHeaderSection}>
          <Container className={styles.headerContainer}>
            <h2 className={styles.investorHeading}>Invest in a student today</h2>
            <p className={styles.description}>
              <strong>
                Use the quiz to share your preferences. We are working toward a
                matching algorithm to match your preferences with students
                profiles.
              </strong>
            </p>
            <p className={styles.description}>
              Don&#39;t have time? Click the button below to browse student
              profiles
            </p>
            <Link className={`${styles.link} ${styles.investoryLink}`} href="/student-bank-info">
              Find Students
            </Link>
          </Container>
        </section>
        <QuizContainer
          headerSection={
            <Image
              className={styles.quizImg}
              src={InvstedBackground}
              alt="Invsted background image"
            />
          }
        >
          <div className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src={InvstedLogo}
              alt="Invsted Logo"
            />
          </div>
          <div className={styles.formText}>
            <h2 className={styles.formHeading}>
              Get matched with a student to invest in!
            </h2>
            <p className={styles.formDescription}>
              Please fill out this form with your preferences so we may provide
              you with personalised student matches. If you do not wish to have
              personalised matches, you can go straight to viewing student
              profiles by clicking the button below.
            </p>
          </div>
          <div className={styles.questions}>
            <FormInputField
              register={{
                name: "Firstname",
                required: true,
                onChange: async (e) => console.log(e.target.value),
                onBlur: async (e) => console.log(e.target.value),
                ref: () => {},
              }}
              type="text"
              label="First Name *"
              placeholder="e.g. John"
              labelClass={styles.formLabel}
              className={styles.formInput}
            />
            <FormInputField
              register={{
                name: "Lastname",
                required: true,
                onChange: async (e) => console.log(e.target.value),
                onBlur: async (e) => console.log(e.target.value),
                ref: () => {},
              }}
              type="text"
              label="Last Name *"
              placeholder="e.g. Wick"
              labelClass={styles.formLabel}
              className={styles.formInput}
            />
            <label className={styles.formLabel}>
              Which tags would you want used to match you with a student*
            </label>
            <label className={`${styles.formLabel} ${styles.subLabel}`}>
              Please select all that would apply. These tags will be used to
              match you with students who fit your preferences.
            </label>
            <GridContainer>
              {identityTags.map((identity) => (
                <FormCheckboxField
                  key={identity.label}
                  register={{
                    name: identity.label,
                    required: true,
                    onChange: async (e) => console.log(e.target.value),
                    onBlur: async (e) => console.log(e.target.value),
                    ref: () => {},
                  }}
                  label={identity.label}
                  labelClass={styles.formLabel}
                  className={styles.checkInput}
                />
              ))}
            </GridContainer>
            <label className={styles.formLabel}>
              Which tags represent shared interests?*
            </label>
            <label className={`${styles.formLabel} ${styles.subLabel}`}>
              Please select all that would apply. These tags will be used to
              match you with students who fit your preferences.
            </label>
            <GridContainer>
              {interestTags.map((identity) => (
                <FormCheckboxField
                  key={identity.label}
                  register={{
                    name: identity.label,
                    required: true,
                    onChange: async (e) => console.log(e.target.value),
                    onBlur: async (e) => console.log(e.target.value),
                    ref: () => {},
                  }}
                  label={identity.label}
                  labelClass={styles.formLabel}
                  className={styles.checkInput}
                />
              ))}
            </GridContainer>
            <label className={styles.formLabel}>
              Which tags represent shared passions?*
            </label>
            <label className={`${styles.formLabel} ${styles.subLabel}`}>
              Please select all that would apply. These tags will be used to
              match you with students who fit your preferences.
            </label>
            <GridContainer>
              {passionTags.map((identity) => (
                <FormCheckboxField
                  key={identity.label}
                  register={{
                    name: identity.label,
                    required: true,
                    onChange: async (e) => console.log(e.target.value),
                    onBlur: async (e) => console.log(e.target.value),
                    ref: () => {},
                  }}
                  label={identity.label}
                  labelClass={styles.formLabel}
                  className={styles.checkInput}
                />
              ))}
            </GridContainer>
            <FormInputField
              register={{
                name: "email",
                required: true,
                onChange: async (e) => console.log(e.target.value),
                onBlur: async (e) => console.log(e.target.value),
                ref: () => {},
              }}
              type="email"
              label="What is your email?*"
              placeholder="howard.thurman@gmail.com"
              subLabel="Please provide your email address for verification purposes"
              subLabelClass={`${styles.formLabel} ${styles.subLabel}`}
              labelClass={styles.formLabel}
              className={styles.formInput}
            />
            <label htmlFor={"affiliation"} className={styles.formLabel}>
              Is there a university you are affiliated with?
            </label>
            <FormCheckboxField
              register={{
                name: "affiliation",
                required: true,
                onChange: async (e) => console.log(e.target.value),
                onBlur: async (e) => console.log(e.target.value),
                ref: () => {},
              }}
              name={"affiliation"}
              type={"radio"}
              label={"Harvard University"}
              labelClass={styles.formLabel}
              className={styles.checkInput}
            />
            <FormCheckboxField
              register={{
                name: "affiliation",
                required: true,
                onChange: async (e) => console.log(e.target.value),
                onBlur: async (e) => console.log(e.target.value),
                ref: () => {},
              }}
              name={"affiliation"}
              type={"radio"}
              label={"University of Cambridge"}
              labelClass={styles.formLabel}
              className={styles.checkInput}
            />
            <label className={`${styles.marginTop} ${styles.formLabel}`}>
              Do you accept our Terms & Conditions? *
            </label>
            <FormCheckboxField
              register={{
                name: "terms",
                required: true,
                onChange: async (e) => console.log(e.target.value),
                onBlur: async (e) => console.log(e.target.value),
                ref: () => {},
              }}
              labelClass={styles.formLabel}
              className={styles.checkInput}
            />
            <Button className={styles.submitBtn}>Submit</Button>
          </div>
        </QuizContainer>
      </Layout>
    </div>
  );
}

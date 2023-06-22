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
import UploadFileBtn from "@/components/form/UploadFileBtn";
import { useState, useRef, useEffect, ChangeEvent } from "react";
import ModalContainer from "@/components/Containers/ModalContainer";
import { createPortal } from "react-dom";

export default function StudentQuiz() {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const [file, setFile] = useState("");

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    setShowModal(false);

    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];
    setFile(file?.name)
  };

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
          <Image
            className={styles.quizImg}
            src={InvstedBackground}
            alt="Invsted background image"
          />
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
          <FormInputField
            register={{
              name: "university",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            type="text"
            label="What is your university? *"
            placeholder="e.g. Harvard"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <label className={styles.formLabel}>
            Upload your profile picture *
          </label>
          <UploadFileBtn file={file} onClick={() => setShowModal(true)} />
          <FormInputField
            register={{
              name: "email",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            type="email"
            label="What is your official university email? *"
            placeholder="howard.thurman@gmail.com"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "studying",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            type="text"
            label="What are you studying?"
            placeholder="e.g. Engineering"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "college",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            type="text"
            label="House or College?"
            placeholder="e.g. House"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <label className={styles.formLabel}>
            Which tags would you choose to describe your identity? *
          </label>
          <label className={`${styles.formLabel} ${styles.subLabel}`}>
            These tags are used to match you with investors
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
            Which tags represent your interests? *
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
            Which tags represent your passions? *
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
              name: "personalInfo",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            as="textarea"
            rows={3}
            label="Tell us about yourself"
            placeholder="e.g. House"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "journey",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            as="textarea"
            rows={3}
            label="What has your journey been like up until now?"
            placeholder="e.g. House"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "proud",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            as="textarea"
            rows={3}
            label="What are you most proud of?"
            placeholder="e.g. House"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "achievement",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            as="textarea"
            rows={3}
            label="What do you want to achieve in life?"
            placeholder="e.g. House"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "uniValue",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            as="textarea"
            rows={3}
            label="What does being at your university mean to you?"
            placeholder="e.g. House"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "giveBack",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            as="textarea"
            rows={3}
            label="What are the ways you give back or give to others?"
            placeholder="e.g. House"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "activity",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            as="textarea"
            rows={3}
            label="What do you do to relax or for fun?"
            placeholder="e.g. House"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "passionate",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            as="textarea"
            rows={3}
            label="What do you feel most passionate about?"
            placeholder="e.g. House"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "personalWish",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            as="textarea"
            rows={3}
            label="What is something you have always wanted to try, if time or money was not a factor?"
            placeholder="e.g. House"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "whyCourse",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            as="textarea"
            rows={3}
            label="Why did you decide to do the course you are currently doing?"
            placeholder="e.g. House"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "goals",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            as="textarea"
            rows={3}
            label="What are some of your own personal goals in the next 5 years?"
            placeholder="e.g. House"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <label className={styles.formLabel}>
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
      {mounted &&
        ref?.current &&
        createPortal(
          <ModalContainer
            show={showModal}
            handleClose={() => setShowModal(false)}
            modalBody={
              <div className={styles.modalBody}>
                <h1 className={styles.fileUploadTitle}>
                  drag & drop <br />
                  any files
                </h1>
                <p className={styles.fileUploadText}>or</p>
                <label
                  htmlFor="file-upload-btn"
                  className={styles.fileUploadBtn}
                >
                  Choose a local file
                </label>
                <input
                  onChange={handleFileInput}
                  type={"file"}
                  id="file-upload-btn"
                  className={styles.fileTypeInput}
                />
              </div>
            }
          />,
          ref.current
        )}
    </Layout>
  );
}

import styles from "@/styles/NewsLetterSection.module.css";
import { Button, Container } from "react-bootstrap";
import FormInputField from "@/components/form/FormInputField";

const NewsLetterSection = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.textSection}>
        <h2 className={styles.heading}>Our Community</h2>
        <p className={styles.description}>
          Join our mailing list to learn about our students and what we are
          working on{" "}
        </p>
      </div>
      <div className={styles.formSection}>
        <FormInputField
          inputGroupElement={
            <Button variant="outline-primary" className={styles.btn}>
              Submit
            </Button>
          }
          register={{
            name: "Email input",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          placeholder="Enter your email address"
          className={styles.formElement}
        />
      </div>
    </Container>
  );
};

export default NewsLetterSection;

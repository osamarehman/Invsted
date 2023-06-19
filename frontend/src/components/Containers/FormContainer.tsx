import { Container } from "react-bootstrap";
import styles from "@/styles/AuthenticationForm.module.css";
import { ReactNode } from "react";

interface IFormContainer {
  children: ReactNode;
  descriptionText?: string;
  headerText: string;
}

const FormContainer = ({
  children,
  headerText,
  descriptionText,
}: IFormContainer) => {
  return (
    <section id="login-section" className={styles.authSection}>
      <Container className={styles.authContainer}>
        <h1 className={styles.authTitle}>{headerText}</h1>
        {descriptionText && (
          <p className={styles.authDescription}>{descriptionText}</p>
        )}
        <div className={styles.formBlock}>
          <div className={styles.form}>{children}</div>
        </div>
      </Container>
    </section>
  );
};

export default FormContainer;

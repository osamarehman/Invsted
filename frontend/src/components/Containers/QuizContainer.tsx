import { Container } from "react-bootstrap";
import styles from "@/styles/QuizContainer.module.css";
import { ReactNode } from "react";

interface IQuizContainer {
  headerSection?: ReactNode;
  children?: ReactNode;
}

const QuizContainer = ({ headerSection, children }: IQuizContainer) => {
  return (
    <section id="quiz-container" className={styles.quizSection}>
      <Container className={styles.quizContainer}>
        <div className={styles.quizContent}>
          <div className={styles.headerSection}>{headerSection}</div>
          <div className={styles.bodySection}>{children}</div>
        </div>
      </Container>
    </section>
  );
};

export default QuizContainer;

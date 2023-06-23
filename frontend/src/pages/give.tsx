import Layout from "@/components/Layout/Layout";
import NotificationBar from "@/components/Sections/NotificationBar";
import { Container } from "react-bootstrap";
import styles from "@/styles/ViewStudents.module.css";
import StudentFilter from "@/components/ViewStudents/StudentFilter";
import Students from "@/components/ViewStudents/Students";

export default function ViewStudents() {
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
        <section id="student-view-header" className={styles.headerSection}>
          <Container className={styles.headerContainer}>
            <h1 className={styles.heading}>All Students</h1>
          </Container>
        </section>
        <section id="all-students">
            <Container>
                <StudentFilter />
                <Students />
            </Container>
        </section>
      </Layout>
    </div>
  );
}

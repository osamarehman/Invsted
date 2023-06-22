import StudentProfileNavbar from "@/components/Layout/StudentProfileNavbar";
import NotificationBar from "@/components/Sections/NotificationBar";
import StudentDescription from "@/components/StudentProfile/StudentDescription";
import StudentQualification from "@/components/StudentProfile/StudentQualification";
import { Container } from "react-bootstrap";
import styles from "@/styles/StudentQualification.module.css";

export default function StudentProfile() {
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
      <StudentProfileNavbar />
      <section className={styles.profileSection}>
        <Container className={styles.profileContainer}>
            <div className={styles.profile}>
                <StudentQualification />
                <StudentDescription />
            </div>
        </Container>
      </section>
    </div>
  );
}

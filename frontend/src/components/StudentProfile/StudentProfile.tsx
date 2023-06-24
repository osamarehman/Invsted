import StudentDescription from "@/components/StudentProfile/StudentDescription";
import StudentQualification from "@/components/StudentProfile/StudentQualification";
import { Container } from "react-bootstrap";
import styles from "@/styles/StudentQualification.module.css";

const Profile = ({ profileStyles = "" }) => {
  return (
    <section className={`${styles.profileSection} ${profileStyles}`}>
      <Container className={styles.profileContainer}>
        <div className={styles.profile}>
          <StudentQualification />
          <StudentDescription />
        </div>
      </Container>
    </section>
  );
};

export default Profile;

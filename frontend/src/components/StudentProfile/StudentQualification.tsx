import Image from "next/image";
import StudentImage from "@/assets/images/Jezz.png";
import Qualification from "./Qualification";
import GradIcon from "@/assets/images/gradIcon.png";
import HomeIcon from "@/assets/images/homeIcon.png";
import SubjectIcon from "@/assets/images/subjectIcon.png";
import styles from "@/styles/StudentQualification.module.css";

const StudentQualification = () => {
  return (
    <div className={styles.infoSection}>
      <Image className={styles.infoImg} alt="student-image" src={StudentImage} />
      <h1 className={styles.name}>Jezz</h1>
      <div className={styles.qualificationContainer}>
        <Qualification icon={GradIcon} description="University of Cambridge" />
        <Qualification
          icon={HomeIcon}
          description="But let him flee into the most dignified of the ways they are. The most worthy of labor is he who is easy to suffer"
        />
        <Qualification icon={SubjectIcon} description="Engineering" />
      </div>
    </div>
  );
};

export default StudentQualification;

import Image, { StaticImageData } from "next/image";
import styles from "@/styles/StudentQualification.module.css";

interface IQualification {
  icon: StaticImageData;
  description: string;
}

const Qualification = ({ icon, description }: IQualification) => {
  return (
    <div className={styles.qualification}>
      <Image className={styles.qualificationImg} src={icon} alt="qualification" />
      <p className={styles.qualificationDesc}>{description}</p>
    </div>
  );
};

export default Qualification;

import GeneralCard from "@/components/Cards/GeneralCard";
import StudentImage from "@/assets/images/Jezz.png";
import Link from "next/link";
import styles from "@/styles/ViewStudents.module.css";
import { useRouter } from "next/router";

const Students = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/student-profiles/jezz");
  };

  return (
    <div className={styles.studentSection}>
      <div className={styles.cardContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => {
          return (
            <GeneralCard
              key={val}
              cardTitle="Jezz"
              titleStyle={styles.titleStyle}
              cardImage={StudentImage}
              cardStyle={styles.cardStyle}
              onClick={handleClick}
              cardMainBody={
                <div className={styles.cardBody}>
                  <p className={styles.university}>University of Cambridge</p>
                  <Link
                    className={styles.viewLink}
                    href={"/student-profiles/jezz"}
                  >
                    View Profile
                  </Link>
                </div>
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Students;

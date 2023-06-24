import GeneralCard from "@/components/Cards/GeneralCard";
import StudentImage from "@/assets/images/Jezz.png";
import Link from "next/link";
import styles from "@/styles/ViewStudents.module.css";

const Students = () => {
  return (
    <div className={styles.studentSection}>
      <div className={styles.cardContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => {
          return (
            <Link key={val} href={"/student-profiles/jezz"}>
              <GeneralCard
                cardTitle="Jezz"
                titleStyle={styles.titleStyle}
                cardImage={StudentImage}
                cardStyle={styles.cardStyle}
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Students;

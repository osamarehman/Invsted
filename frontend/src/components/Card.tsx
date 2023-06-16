import styles from "@/styles/Card.module.css";
import Link from "next/link";

interface ICard {
    type: string,
    title: string,
    description: string,
    backgroundColor: string
}

const Card = ({type, title, description, backgroundColor}: ICard) => {
  return (
    <div className={styles.cardSection}>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderTitle}>Get started</div>
          <div className={styles.cardHeaderText}>{type}</div>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.cardBodyText}>
            <strong>
              {title}
              <br />‍
            </strong>
            <strong>
              <br />
            </strong>
            {description}
          </p>
        </div>
        <div className={styles.cardLinks}>
          <Link href="/" className={styles.links} style={{ backgroundColor }}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

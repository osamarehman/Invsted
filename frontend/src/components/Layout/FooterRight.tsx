import styles from "@/styles/Footer.module.css";
import Link from "next/link";

const FooterRight = () => {
  return (
    <div className={styles.footerRight}>
      <div className={styles.linkContainer}>
        <h6 className={styles.heading}>Investors</h6>
        <ul role="list" className={styles.listContainer}>
          <li className={styles.list}>
            <Link href="/investors" className={styles.links}>
              Investor Home
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/give" className={styles.links}>
              Find Students
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/investor-quiz" className={styles.links}>
              Investor Quiz
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/investors" className={styles.links}>
              Dashboard
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/equity-fund" className={styles.links}>
              Equity Fund
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.linkContainer}>
        <h6 className={styles.heading}>Students</h6>
        <ul role="list" className={styles.listContainer}>
          <li className={styles.list}>
            <Link href="/students" className={styles.links}>
              Student Home
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/student-quiz" className={styles.links}>
              Create Profile
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/student-bank-info" className={styles.links}>
              Bank Info
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/student-profile" className={styles.links}>
              Dashboard
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/student-profile" className={styles.links}>
              Profile
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/give" className={styles.links}>
              View Students
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.linkContainer}>
        <h6 className={styles.heading}>About</h6>
        <ul role="list" className={styles.listContainer}>
          <li className={styles.list}>
            <Link href="/about" className={styles.links}>
              About Us
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/faq" className={styles.links}>
              FAQs
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/privacy" className={styles.links}>
              Privacy Policy
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/privacy" className={styles.links}>
              Cookie Policy
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/signup" className={styles.links}>
              Sign Up
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/login" className={styles.links}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterRight;

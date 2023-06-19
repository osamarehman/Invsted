import Link from "next/link";
import { Container } from "react-bootstrap";
import GoogleSignInButton from "../auth/GoogleSignInButton";
import LinkedInSignInButton from "../auth/LinkedinSignInButton";
import styles from "@/styles/SocialLoginSection.module.css";

interface ISocialLoginSection {
  text: string;
  linkText: string;
  href: string;
}

const SocialLoginSection = ({ text, linkText, href }: ISocialLoginSection) => {
  return (
    <Container className={styles.socialLoginContainer}>
      <div className={styles.separator}>
        <div className={styles.grayline} />
        <div className={styles.textSeparator}>or</div>
        <div className={styles.grayline} />
      </div>
      <div className={styles.socialLoginButtons}>
        <GoogleSignInButton className={styles.buttons} />
        <LinkedInSignInButton className={styles.buttons} />
      </div>
      <div className={styles.textSection}>
        {text}
        <Link className={styles.link} href={href}>
          {linkText}
        </Link>
      </div>
    </Container>
  );
};

export default SocialLoginSection;

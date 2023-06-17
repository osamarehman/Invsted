import Image from "next/image";
import InvstedLogoWhite from "@/assets/images/invsted-logo-white.png";
import LinkedInIcon from "@/assets/images/linkedin-icon.svg";
import InstagramIcon from "@/assets/images/instagram-icon.svg";
import FacebookIcon from "@/assets/images/facebook-icon.svg";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

const FooterLeft = () => {
  return (
    <div className={styles.footerLeft}>
      <Link href="/" className={`${styles.link} ${styles.logo}`}>
        <Image
          src={InvstedLogoWhite}
          alt="Invsted logo"
          className={styles.logoImg}
          width={221}
        />
      </Link>
      <p className={styles.footerText}>
        Giving back is the best investment you can make. Invest in someone
        today.
      </p>
      <div className={styles.socialIconContainer}>
        <Link href="/" className={`${styles.link} ${styles.socialLinks}`}>
          <Image
            src={LinkedInIcon}
            alt="Invsted linkedin link"
            className={styles.socialIcons}
          />
        </Link>
        <Link href="/" className={`${styles.link} ${styles.socialLinks}`}>
          <Image
            src={InstagramIcon}
            alt="Invsted instagram link"
            className={styles.socialIcons}
          />
        </Link>
        <Link href="/" className={`${styles.link} ${styles.socialLinks}`}>
          <Image
            src={FacebookIcon}
            alt="Invsted facebook link"
            className={styles.socialIcons}
          />
        </Link>
      </div>
    </div>
  );
};

export default FooterLeft;

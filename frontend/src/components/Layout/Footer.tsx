import styles from "@/styles/Footer.module.css";
import { Container } from "react-bootstrap";
import CTAContainer from "@/components//Containers/CTAContainer";
import FooterLeft from "@/components/Layout/FooterLeft";
import FooterRight from "@/components/Layout/FooterRight";

export default function Footer({ footerStyle = "" }) {
  return (
    <footer className={`${styles.footer} ${footerStyle}`}>
      <CTAContainer />
      <section className={styles.mainFooter}>
        <Container className={styles.container}>
            <div className={styles.footerRow}>
            <FooterLeft />
            <FooterRight />
            </div>
        </Container>
      </section>
    </footer>
  );
}

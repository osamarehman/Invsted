import styles from "@/styles/Footer.module.css";
import { Container } from "react-bootstrap";
import CTAContainer from "@/components//Containers/CTAContainer";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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

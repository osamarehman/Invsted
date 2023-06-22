
import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "react-bootstrap";
import logo from "@/assets/images/invsted-logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai"

const StudentProfileNavbar = () => {
    return (
        <section id="student-profile-navbar" className={styles.studentProfileSection}>
            <Container className={styles.studentProfileContainer}>
                <Link href="/" className={styles.navLinks}>
                    <Image className={styles.logoImg} src={logo} alt="invsted-logo" />
                </Link>
                <Link href="/give" className={`${styles.navLinks} ${styles.customLink}`}>Find Students</Link>
                <Button className={styles.cartBtn}>
                    <AiOutlineShoppingCart size={30} />
                    <span className={styles.cartText}>Cart</span>
                    <span className={styles.cartIemCount}>0</span>
                </Button>
            </Container>
        </section>
    )
}

export default StudentProfileNavbar;

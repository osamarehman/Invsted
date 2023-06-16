import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "@/styles/HeroBanner.module.css"


const HeroBanner = () => {

    return (
        <div className={styles.imageSection}>
            <Container className={styles.imageContainer}>
                <div className={styles.textContainer}>
                    <h6 className={styles.subHeading}>Get started today</h6>
                    <h1 className={styles.mainHeading}>Giving back is the best investment you can make</h1>
                </div>
                <Link href="/" className={styles.link}>Join Now</Link>
            </Container>
        </div>
    )

}

export default HeroBanner;

import styles from "@/styles/WhyInvstedSection.module.css";
import { Container } from "react-bootstrap";
import TextCard from "@/components/Cards/TextCard";

const WhyInvstedSection = ({
  title = "",
  text = <></>,
  titleStyle = "",
  normalTextStyle = "",
  textCardTitle1 = "",
  textCardTitle2 = "",
  textCardTitle3 = "",
  textCardTitle4 = "",
  textDesc1 = "",
  textDesc2 = "",
  textDesc3 = "",
  textDesc4 = "",
}) => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.cardContainer}>
          <TextCard
            containerStyle={styles.bgYellow}
            cardTitle={textCardTitle1}
            cardText={textDesc1}
          />
          <TextCard
            containerStyle={`${styles.bgBlue} ${styles.marginTop50}`}
            titleStyle={styles.textWhite}
            cardTitle={textCardTitle2}
            cardText={textDesc2}
          />
          <TextCard
            containerStyle={styles.bgGreen}
            titleStyle={styles.textWhite}
            cardTitle={textCardTitle3}
            cardText={textDesc3}
          />
          <TextCard
            containerStyle={`${styles.bgYellow} ${styles.marginTop50}`}
            cardTitle={textCardTitle4}
            cardText={textDesc4}
          />
        </div>
        <div className={styles.textSection}>
          <h1 className={`${styles.title} ${titleStyle}`}>{title}</h1>
          <div className={`${styles.text} ${normalTextStyle}`}>{text}</div>
        </div>
      </Container>
    </section>
  );
};

export default WhyInvstedSection;

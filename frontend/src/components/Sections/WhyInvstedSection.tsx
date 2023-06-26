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
  containerBg1 = "yellow",
  containerBg2 = "blue",
  containerBg3 = "green",
  isTextWhite1 = false,
  isTextWhite2 = true,
  isTextWhite3 = true,
  isTextWhite4 = false,
}) => {

  const cardBgColor: {[key: string]: string} = {
    "blue": styles.bgBlue,
    "green": styles.bgGreen,
    "yellow": styles.bgYellow,
  }
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.cardContainer}>
          <TextCard
            containerStyle={cardBgColor[containerBg1]}
            cardTitle={textCardTitle1}
            titleStyle={isTextWhite1 ? styles.textWhite : ""}
            cardText={textDesc1}
          />
          <TextCard
            containerStyle={`${cardBgColor[containerBg2]} ${styles.marginTop50}`}
            titleStyle={isTextWhite2 ? styles.textWhite : ""}
            cardTitle={textCardTitle2}
            cardText={textDesc2}
          />
          <TextCard
            containerStyle={cardBgColor[containerBg3]}
            titleStyle={isTextWhite3 ? styles.textWhite : ""}
            cardTitle={textCardTitle3}
            cardText={textDesc3}
          />
          <TextCard
            containerStyle={`${cardBgColor[containerBg1]} ${styles.marginTop50}`}
            cardTitle={textCardTitle4}
            titleStyle={isTextWhite4 ? styles.textWhite : ""}
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

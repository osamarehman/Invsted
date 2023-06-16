import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import styles from "@/styles/InfoSection.module.css";

interface IInfoSection {
  src: StaticImageData;
  textNode: ReactNode;
  title: string;
  justifyContent: string;
  top?: "default" | string,
  bottom?: "default" | string,
  left?: "default" | string,
  right?: "default" | string,
  backgroundColor: string,
  titleColor: "#000" | string
}

const InfoSection = ({
  src,
  textNode,
  title,
  justifyContent,
  top,
  bottom,
  left,
  right,
  backgroundColor,
  titleColor
}: IInfoSection) => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.container} style={{ justifyContent, backgroundColor }}>
        <Image 
            src={src} 
            alt="info-section-image" 
            className={styles.infoImg} 
            style={{top, left, right, bottom}}
        />
        <div></div>
        <div className={styles.textSection}>
          <div className={styles.sectionWrapper}></div>
          <div className={styles.textContainer}>
            <h3 className={styles.title} style={{ color: titleColor }}>{title}</h3>
            <div className={styles.description}>{textNode}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

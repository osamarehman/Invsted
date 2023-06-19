import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "@/styles/InfoSection.module.css";

interface IInfoSection {
  src: StaticImageData;
  statSRC?: StaticImageData | "";
  textNode: ReactNode;
  title: string;
  justifyContent: string;
  top?: "default" | string;
  bottom?: "default" | string;
  left?: "default" | string;
  right?: "default" | string;
  backgroundColor: string;
  titleColor: "#000" | string;
  isStats?: boolean;
  containerStyle?: string,
  textSectionStyles?: string,
  imageStyle?: string,
  sectionStyle?: string,
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
  titleColor,
  isStats = false,
  statSRC,
  containerStyle = "",
  textSectionStyles = "",
  imageStyle = "",
  sectionStyle = ""
}: IInfoSection) => {
  return (
    <section className={`${styles.infoSection} ${sectionStyle}`}>
      <div
        className={`${styles.container} ${containerStyle}`}
        style={{ justifyContent, backgroundColor }}
      >
        <Image
          src={src}
          alt="info-section-image"
          className={`${styles.infoImg} ${imageStyle}`}
          style={{ top, left, right, bottom }}
        />
        {isStats ? (
          <Image
            src={statSRC!}
            alt="stat-image"
            className={styles.statsImage}
            width={252}
          />
        ) : (
          <></>
        )}
        <div></div>
        <div className={`${styles.textSection} ${textSectionStyles}`} >
          <div className={styles.sectionWrapper}></div>
          <div className={styles.textContainer}>
            <h3 className={styles.title} style={{ color: titleColor }}>
              {title}
            </h3>
            <div className={styles.description}>{textNode}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

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
}: IInfoSection) => {
  return (
    <section className={styles.infoSection}>
      <div
        className={styles.container}
        style={{ justifyContent, backgroundColor }}
      >
        <Image
          src={src}
          alt="info-section-image"
          className={styles.infoImg}
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
        <div className={styles.textSection}>
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

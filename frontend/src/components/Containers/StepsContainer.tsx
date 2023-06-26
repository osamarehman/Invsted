import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "@/styles/Students.module.css";
import { ReactNode } from "react";

interface IStepsContainer {
  subTitle?: string;
  title?: string;
  strongText?: string;
  normalText?: string;
  linkText?: string;
  link?: string;
  src?: StaticImageData;
  sectionStyle?: string;
  containerStyle?: string;
  titleStyle?: string;
  subTitleStyle?: string;
  strongTextStyle?: string;
  normalTextStyle?: string;
  linkStyle?: string;
  imageStyle?: string;
  isTextSection?: boolean;
  children?: ReactNode;
}

const StepsContainer = ({
  subTitle = "",
  title = "",
  strongText = "",
  normalText = "",
  linkText = "",
  link = "",
  src,
  sectionStyle = "",
  containerStyle = "",
  titleStyle = "",
  subTitleStyle = "",
  strongTextStyle = "",
  normalTextStyle = "",
  linkStyle = "",
  imageStyle = "",
  isTextSection = true,
  children = <></>,
}: IStepsContainer) => {
  return (
    <section className={`${styles.stepSection} ${sectionStyle}`}>
      <Container className={`${styles.stepContainer} ${containerStyle}`}>
        {isTextSection && (
          <div className={styles.textSection}>
            {subTitle && (
              <h6 className={`${styles.subTitle} ${subTitleStyle}`}>
                {subTitle}
              </h6>
            )}
            {title && (
              <h1 className={`${styles.title} ${titleStyle}`}>{title}</h1>
            )}
            <p className={`${styles.text} ${normalTextStyle}`}>
              {strongText && (
                <strong className={`${styles.strongText} ${strongTextStyle}`}>
                  {strongText}
                </strong>
              )}
              <br />
              <br />
              {normalText && normalText}
            </p>
            {linkText && (
              <Link className={`${styles.link} ${linkStyle}`} href={link}>
                {linkText}
              </Link>
            )}
          </div>
        )}
        {src && (
          <Image
            className={`${styles.image} ${imageStyle}`}
            src={src}
            alt="students home image"
          />
        )}
        {children}
      </Container>
    </section>
  );
};

export default StepsContainer;

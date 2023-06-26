import { Card } from "react-bootstrap";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "@/styles/GeneralCard.module.css";
import Link from "next/link";

interface IImageCard {
  cardImage: StaticImageData | string;
  cardTitle: string;
  cardShortDescription?: string;
  cardStyle?: string,
  imageStyle?: string,
  titleStyle?: string,
  descriptionStyle?: string,
  bodyStyle?: string,
  linkHref: string,
  linkText: string,
}

const ImageCard = ({
  cardImage,
  cardTitle,
  cardShortDescription,
  cardStyle = "",
  imageStyle = "",
  titleStyle = "",
  descriptionStyle = "",
  bodyStyle = "",
  linkHref,
  linkText = "",
}: IImageCard) => {
  return (
    <Card className={`${styles.cardContainer} ${styles.borderNone} ${styles.width280} ${cardStyle}`}>
        <Link href={linkHref} className={styles.link}>
            <Image className={`${styles.cardImage} ${styles.borderNone} ${styles.objectFitCover} ${imageStyle}`} alt="base image" src={cardImage} />
            <span className={styles.linkText}>{linkText}</span>
        </Link>
      <Card.Body className={`${styles.cardBody} ${bodyStyle}`} >
        <Card.Title className={`${styles.imageCardTitle} ${titleStyle}`}>{cardTitle}</Card.Title>
        {cardShortDescription && <Card.Text className={`${styles.imageCardDescription} ${descriptionStyle}`}>{cardShortDescription}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default ImageCard;

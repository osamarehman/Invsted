import { Card } from "react-bootstrap";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "@/styles/GeneralCard.module.css";

interface IGeneralCard {
  cardImage?: StaticImageData | string;
  cardTitle: string;
  cardShortDescription?: string;
  cardMainBody?: ReactNode;
  cardAction?: ReactNode;
  cardStyle?: string,
  imageStyle?: string,
  titleStyle?: string,
  descriptionStyle?: string,
  bodyStyle?: string,
  mainSectionStyle?: string,
  footerStyle?: string,
}

const GeneralCard = ({
  cardImage,
  cardTitle,
  cardShortDescription,
  cardMainBody,
  cardAction,
  cardStyle = "",
  imageStyle = "",
  titleStyle = "",
  descriptionStyle = "",
  bodyStyle = "",
  mainSectionStyle = "",
  footerStyle = ""
}: IGeneralCard) => {
  return (
    <Card className={`${styles.cardContainer} ${cardStyle}`}>
      {cardImage && <Image className={`${styles.cardImage} ${imageStyle}`} alt="base image" src={cardImage} />}
      <Card.Body className={`${styles.cardBody} ${bodyStyle}`} >
        <Card.Title className={`${styles.cardTitle} ${titleStyle}`}>{cardTitle}</Card.Title>
        {cardShortDescription && <Card.Text className={`${styles.cardDescription} ${descriptionStyle}`}>{cardShortDescription}</Card.Text>}
        {cardMainBody && <Card.Text as={"div"} className={`${styles.cardMainBody} ${mainSectionStyle}`}>{cardMainBody}</Card.Text>}
        {cardAction && <Card.Footer className={`${styles.cardFooter} ${footerStyle}`}>{cardAction}</Card.Footer>}
      </Card.Body>
    </Card>
  );
};

export default GeneralCard;

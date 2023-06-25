import { Card } from "react-bootstrap";
import styles from "@/styles/Card.module.css";

const TextCard = ({
  cardTitle = "",
  cardText = "",
  titleStyle = "",
  textStyle = "",
  bodyStyle = "",
  containerStyle = "",
}) => {
  return (
    <Card as={"div"} className={`${styles.textCardContainer} ${containerStyle}`}>
      <Card.Body as={"div"} className={`${styles.textBody} ${bodyStyle}`}>
        <Card.Title className={`${styles.textTitle} ${titleStyle}`}>{cardTitle}</Card.Title>
        <Card.Text as={"div"} className={`${styles.text} ${textStyle}`}>{cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TextCard;

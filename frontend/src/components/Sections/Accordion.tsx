import Image from "next/image";
import { Card, Container } from "react-bootstrap";
import PlusIcon from "@/assets/images/plus-icon.svg";
import styles from "@/styles/Accordion.module.css";
import { useState } from "react";

interface IItem {
  id: string;
  title: string;
  content: string | JSX.Element;
}

interface IAccordion {
  items: IItem[];
  titleStyle?: string;
}

const Accordion = ({ items, titleStyle }: IAccordion) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev)
    }
  return (
    <div className={styles.faqContainer}>
      {items.map((item: IItem, _idx: number) => (
        <Card key={item.id} className={styles.cardContainer}>
          <Card.Header onClick={handleToggle} className={styles.headerSection}>
            <p className={`${styles.title} ${titleStyle}`}>{item.title}</p>
            <Image alt={"Toggle Icon"} style={{ transform: `rotate(${isOpen ? "45deg" : "0deg"})` }} className={styles.image} src={PlusIcon} />
          </Card.Header>
          { isOpen && <Card.Body className={styles.body}>{item.content}</Card.Body>}
        </Card>
      ))}
    </div>
  );
};

export default Accordion;

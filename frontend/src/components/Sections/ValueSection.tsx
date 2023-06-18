import { Container } from "react-bootstrap";
import styles from "@/styles/ValueSection.module.css";
import ResiliencyImg from "@/assets/images/value-section-img-2.jpg";
import EducationImg from "@/assets/images/value-section-img-1.jpg";
import IntegrityImg from "@/assets/images/value-section-img-4.jpg";
import ImpactImg from "@/assets/images/value-section-img-3.jpeg";
import EquityImg from "@/assets/images/value-section-img-5.jpg";
import { useState } from "react";
import Image from "next/image";

const ValueSection = () => {
  const values = [
    {
      title: "Resilience",
      img: ResiliencyImg,
      content:
        "Resilience is not a word we use lightly. Resilience is power & strength, but doesn't come without a cost. Resilience often comes from suffering & adversity. It comes from a lack of opportunity or resources. And so, at InvstED, we recognize the importance of resilience, but also aim to create a world where resilience comes from challenges & hard work, rather than suffering & survival.",
    },
    {
      title: "Education",
      img: EducationImg,
      content:
        "Education is powerful, and has the potential to transform lives. But without opportunity or accessibility, education only serves to further solidify existing power structures. By creating more opportunity for those from lower incomes, and making higher education more accessible, we aim to enable education to be the great equalizer that we always wanted it to be.",
    },
    {
      title: "Impact",
      img: ImpactImg,
      content:
        "We understand a little goes a long way. What may be small to you can make a world of difference to someone else. We also know that seeing impact is powerful and creates further incentives to give. That is why we connect low-income students with investors & enable sustained and visible impact.",
    },
    {
      title: "Integrity",
      img: IntegrityImg,
      content:
        "Integrity is what grounds us. It allows us to trust each other, and to trust those we aim to help. Integrity is what ensures that we are all here for the right reasons, that we all want to make an impact, and that we will do it in the right way. Integrity means we will do all we can to empower students, enable investors, create connections, and build trust.",
    },
    {
      title: "Equity",
      img: EquityImg,
      content:
        "We are driven by a fundamental belief in equity. While we do not live in an equitable world, every effort made and every dollar spent toward equity has a compounding effect and creates exponential impact and benefits.",
    },
  ];
  const [value, setValue] = useState({
    title: "Resilience",
    img: ResiliencyImg,
    content: "Resilience is not a word we use lightly. Resilience is power & strength, but doesn't come without a cost. Resilience often comes from suffering & adversity. It comes from a lack of opportunity or resources. And so, at InvstED, we recognize the importance of resilience, but also aim to create a world where resilience comes from challenges & hard work, rather than suffering & survival.",
  });

  return (
    <Container className={styles.valueContainer}>
      <div className={styles.imageSection}>
        <Image className={styles.image} src={value.img} alt={value.title} />
      </div>
      <div className={styles.valueSection}>
        {values.map((_value, _idx: number) => {
          return _value.title !== value.title ? (
            <h6 className={styles.heading} key={_value.title} onClick={() => setValue(_value)}>
              {_value.title}
            </h6>
          ) : (
            <div className={styles.container} key={_value.title}>
              <h6 className={`${styles.heading} ${styles.green}`}>{_value.title}</h6>
              <p className={styles.content}>{_value.content}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ValueSection;

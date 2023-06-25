import { Container } from "react-bootstrap";
import styles from "@/styles/ValueSection.module.css";
import { useState } from "react";
import Image from "next/image";
import { IInvstedValues } from "@/config/values";

interface IValueSection {
  config: IInvstedValues[],
  containerClass?: string
}

const ValueSection = ({ config, containerClass = "" }: IValueSection) => {
  const [value, setValue] = useState(config[0]);

  return (
    <Container className={`${styles.valueContainer} ${containerClass}`}>
      <div className={styles.imageSection}>
        <Image className={styles.image} src={value.img} alt={value.title} />
      </div>
      <div className={styles.valueSection}>
        {config.map((_value: IInvstedValues, _idx: number) => {
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

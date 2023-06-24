import styles from "@/styles/ProfileSetting.module.css";
import { Button } from "react-bootstrap";

interface IFormHeader {
    onClick?: () => {},
    title: string,
    description: string,
    btnBackground: string
}

const FormHeader = ({ onClick, title, description, btnBackground }: IFormHeader) => {
    return (
        <div className={styles.formHeader}>
            <div>
                <h4 className={styles.formTitle}>{title}</h4>
                <p className={styles.formDescription}>{description}</p>
            </div>
            <Button className={`${styles.formAction} ${btnBackground}`} onClick={onClick}>Save</Button>
        </div>
    )
}

export default FormHeader;
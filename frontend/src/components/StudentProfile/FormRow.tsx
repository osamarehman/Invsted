import styles from "@/styles/ProfileSetting.module.css";
import { ReactNode } from "react";

interface IFormRow {
    label: string | ReactNode,
    children: ReactNode
}

const FormRow = ({label, children}: IFormRow) => {
    return (
        <div className={styles.formRow}>
            <label className={styles.label}>{label}</label>
            {children}
        </div>
    )
}

export default FormRow;
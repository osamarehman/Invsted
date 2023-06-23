import styles from "@/styles/StudentQualification.module.css";

interface IDescription {
    title: string,
    answer: string
}

const Description = ({title, answer}: IDescription) => {
    return (
        <div className={styles.description}>
            <h1 className={styles.descriptionTitle}>{title}</h1>
            <p className={styles.descriptionText}>{answer}</p>
        </div>
    )
}

export default Description;

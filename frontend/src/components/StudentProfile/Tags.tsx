import styles from "@/styles/StudentQualification.module.css";

interface ITags {
  title: string,
  tags: string[],
  tagsBgColor?: string,
}

const Tags = ({ title, tags, tagsBgColor }: ITags) => {
  return (
    <div className={styles.tagsSection}>
      <h1 className={styles.tagsTitle}>{title}</h1>
      <div className={styles.tagsContainer}>
        {tags.map((tag) => (
          <div key={tag} className={`${styles.tags} ${tagsBgColor}`}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;

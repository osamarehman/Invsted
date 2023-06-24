import {
  identityTags,
  interestTags,
  passionTags,
} from "@/config/formFieldConfig";
import FormCheckboxField from "@/components/form/FormCheckboxField";
import styles from "@/styles/ViewStudents.module.css";

const StudentFilter = () => {
  return (
    <div className={styles.filterSection}>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <h2 className={styles.filterTitle}>Interest</h2>
          <div className={styles.filterOptions}>
            {interestTags.map((interest) => (
              <FormCheckboxField
                key={interest.label}
                register={{
                  name: interest.label,
                  required: true,
                  onChange: async (e) => console.log(e.target.value),
                  onBlur: async (e) => console.log(e.target.value),
                  ref: () => {},
                }}
                label={interest.label}
                labelClass={styles.formLabel}
                className={styles.checkInput}
              />
            ))}
          </div>
        </div>
        <div className={styles.filter}>
          <h2 className={styles.filterTitle}>Passion</h2>
          <div className={styles.filterOptions}>
            {passionTags.map((passion) => (
              <FormCheckboxField
                key={passion.label}
                register={{
                  name: passion.label,
                  required: true,
                  onChange: async (e) => console.log(e.target.value),
                  onBlur: async (e) => console.log(e.target.value),
                  ref: () => {},
                }}
                label={passion.label}
                labelClass={styles.formLabel}
                className={styles.checkInput}
              />
            ))}
          </div>
        </div>
        <div className={styles.filter}>
          <h2 className={styles.filterTitle}>Identity</h2>
          <div className={styles.filterOptions}>
            {identityTags.map((identity) => (
              <FormCheckboxField
                key={identity.label}
                register={{
                  name: identity.label,
                  required: true,
                  onChange: async (e) => console.log(e.target.value),
                  onBlur: async (e) => console.log(e.target.value),
                  ref: () => {},
                }}
                label={identity.label}
                labelClass={styles.formLabel}
                className={styles.checkInput}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFilter;

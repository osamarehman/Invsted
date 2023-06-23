import {
  identityTags,
  interestTags,
  passionTags,
} from "@/config/formFieldConfig";
import FormCheckboxField from "@/components/form/FormCheckboxField";
import styles from "@/styles/ViewStudents.module.css";

const StudentFilter = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Interest</h2>
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
        <div>
          <h2>Passion</h2>
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
        <div>
          <h2>Identity</h2>
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
  );
};

export default StudentFilter;

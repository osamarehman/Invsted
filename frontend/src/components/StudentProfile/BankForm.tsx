import styles from "@/styles/ProfileSetting.module.css";
import FormHeader from "@/components/StudentProfile/FormHeader";
import FormRow from "@/components/StudentProfile/FormRow";
import FormInputField from "@/components/form/FormInputField";
import FormCheckboxField from "@/components/form/FormCheckboxField";

const BankForm = () => {
  return (
    <div>
      <FormHeader
        title="Bank Information"
        description="Please share your bank information, so we can transfer donations directly to you. This information will be stored securely in our systems."
        // onClick={() => {}}
        btnBackground={styles.beYellow}
      />
      <FormRow label="First Name">
        <FormInputField
          register={{
            name: "FirstName",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          formContainerClass={styles.formContainerClass}
          placeholder="First Name"
          className={`${styles.formInput}`}
        />
      </FormRow>
      <FormRow label="Last Name">
        <FormInputField
          register={{
            name: "LastName",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          formContainerClass={styles.formContainerClass}
          placeholder="Last Name"
          className={`${styles.formInput}`}
        />
      </FormRow>
      <FormRow label="Country">
        <FormCheckboxField
          register={{
            name: "counntry",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          name={"country"}
          type={"radio"}
          label={"US"}
          labelClass={styles.formLabel}
          className={styles.checkInput}
        />
        <FormCheckboxField
          register={{
            name: "country",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          name={"country"}
          type={"radio"}
          label={"UK"}
          checkBoxStyle={`${styles.margin0}`}
          labelClass={styles.formLabel}
          className={styles.checkInput}
        />
      </FormRow>
      <FormRow label="Account Number">
        <FormInputField
          register={{
            name: "accNo",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          formContainerClass={styles.formContainerClass}
          placeholder="Account Number"
          className={`${styles.formInput}`}
        />
      </FormRow>
      <FormRow label="Address">
        <FormInputField
          register={{
            name: "address",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          as={"textarea"}
          rows={3}
          formContainerClass={styles.formContainerClass}
          placeholder="Address"
          className={`${styles.formInput}`}
        />
      </FormRow>
    </div>
  );
};

export default BankForm;

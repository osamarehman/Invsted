import styles from "@/styles/ProfileSetting.module.css";
import FormHeader from "@/components/StudentProfile/FormHeader";
import FormRow from "@/components/StudentProfile/FormRow";

const BankForm = () => {
  return (
    <div>
      <FormHeader
        title="Bank Information"
        description="Please share your bank information, so we can transfer donations directly to you. This information will be stored securely in our systems."
        // onClick={() => {}}
        btnBackground={styles.beYellow}
      />
      <FormRow label="Your Name">
            hello world
      </FormRow>
      <FormRow label="Your Name">
            hello world
      </FormRow>
      <FormRow label="Your Name">
            hello world
      </FormRow>
      <FormRow label="Your Name">
            hello world
      </FormRow>
      <FormRow label="Your Name">
            hello world
      </FormRow>
      <FormRow label="Your Name">
            hello world
      </FormRow>
    </div>
  );
};

export default BankForm;

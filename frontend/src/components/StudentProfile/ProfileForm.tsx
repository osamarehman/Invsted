import styles from "@/styles/ProfileSetting.module.css";
import FormHeader from "@/components/StudentProfile/FormHeader";
import FormRow from "@/components/StudentProfile/FormRow";

const ProfileForm = () => {
  return (
    <div>
      <FormHeader
        title="Profile information"
        description="Please make sure your information is up to date."
        // onClick={() => {}}
        btnBackground={styles.bgGreen}
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
      <FormRow label="Your Name">
            hello world
      </FormRow>
      <FormRow label="Your Name">
            hello world
      </FormRow>
    </div>
  );
};

export default ProfileForm;

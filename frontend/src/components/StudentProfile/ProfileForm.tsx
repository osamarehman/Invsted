import styles from "@/styles/ProfileSetting.module.css";
import FormHeader from "@/components/StudentProfile/FormHeader";
import FormRow from "@/components/StudentProfile/FormRow";
import FormInputField from "@/components/form/FormInputField";
import { Button } from "react-bootstrap";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";
import LinkedInSignInButton from "@/components/auth/LinkedinSignInButton";
import FacebookSignInButton from "@/components/auth/FacebookSignInButton";
import PasswordIcon from "@/assets/images/PasswordIcon.svg";
import AvatarIcon from "@/assets/images/AvatarIcon.svg";
import Image from "next/image";

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
        <div className={styles.rowContent}>
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
            className={`${styles.formInput} ${styles.customBorders1}`}
          />
          <FormInputField
            register={{
              name: "Last Name",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            formContainerClass={styles.formContainerClass}
            placeholder="Last Name"
            className={`${styles.formInput} ${styles.customBorders2}`}
          />
        </div>
      </FormRow>
      <FormRow
        label={
          <>
            Phone <br />
            <span>We&#39;ll only call you in an emergency</span>
          </>
        }
      >
        <FormInputField
          register={{
            name: "phone",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          formContainerClass={styles.formContainerClass}
          placeholder="e.g. 333-333-4444"
          className={`${styles.formInput}`}
        />
      </FormRow>
      <FormRow label="Address">
        <div className={`${styles.rowContent} flex-column`}>
          <FormInputField
            register={{
              name: "phone",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            formContainerClass={styles.formContainerClass}
            placeholder="Street Address"
            className={`${styles.formInput}`}
          />
          <div className="d-flex mt-3">
            <FormInputField
              register={{
                name: "phone",
                required: true,
                onChange: async (e) => console.log(e.target.value),
                onBlur: async (e) => console.log(e.target.value),
                ref: () => {},
              }}
              formContainerClass={styles.formContainerClass}
              placeholder="City"
              className={`${styles.formInput}  ${styles.customBorders1}`}
            />
            <FormInputField
              register={{
                name: "phone",
                required: true,
                onChange: async (e) => console.log(e.target.value),
                onBlur: async (e) => console.log(e.target.value),
                ref: () => {},
              }}
              formContainerClass={styles.formContainerClass}
              placeholder="State"
              className={`${styles.formInput}  ${styles.customBorders3}`}
            />
            <FormInputField
              register={{
                name: "phone",
                required: true,
                onChange: async (e) => console.log(e.target.value),
                onBlur: async (e) => console.log(e.target.value),
                ref: () => {},
              }}
              formContainerClass={styles.formContainerClass}
              placeholder="ZIP"
              className={`${styles.formInput}  ${styles.customBorders2}`}
            />
          </div>
        </div>
      </FormRow>
      <FormRow label="Email">
        <div className={styles.changeEmailContainer}>
          <p className={styles.email}>howard.thurman@gmail.com</p>
          <Button className={styles.emailBtn}>@ Change Email Address</Button>
        </div>
      </FormRow>
      <FormRow label="Social Accounts">
        <div className={`${styles.rowContent} flex-column`}>
          <GoogleSignInButton className={styles.socialBtns} />
          <FacebookSignInButton className={styles.socialBtns} />
          <LinkedInSignInButton className={styles.socialBtns} />
        </div>
      </FormRow>
      <FormRow label="Password">
        <div className={styles.changeEmailContainer}>
          <p className={styles.email}>*********</p>
          <Button className={styles.emailBtn}>
            <Image src={PasswordIcon} width={18} alt="password icon" /> Update Password
          </Button>
        </div>
      </FormRow>
      <FormRow label="Profile Visibility">
        <div className={styles.changeEmailContainer}>
          <p className={styles.email}>Active</p>
          <Button className={styles.emailBtn}>
            <Image src={AvatarIcon} alt="avatar icon" /> Update Profile
          </Button>
        </div>
      </FormRow>
    </div>
  );
};

export default ProfileForm;

import styles from "@/styles/ProfileSetting.module.css";
import FormHeader from "@/components/StudentProfile/FormHeader";
import FormRow from "@/components/StudentProfile/FormRow";
import FormInputField from "@/components/form/FormInputField";
import UploadFileBtn from "@/components/form/UploadFileBtn";
import {
  identityTags,
  interestTags,
  passionTags,
} from "@/config/formFieldConfig";
import FormCheckboxField from "@/components/form/FormCheckboxField";
import GridContainer from "@/components/Containers/GridContainer";

const PreferenceForm = () => {
  return (
    <div>
      <FormHeader
        title="Preferences"
        description="Adjust your settings to change your experience."
        // onClick={() => {}}
        btnBackground={styles.bgBlue}
      />
      <FormRow label="Upload your profile picture">
        <UploadFileBtn containerStyle={styles.flex1} onClick={() => {}} />
      </FormRow>
      <FormRow label="What are you studying?">
        <FormInputField
          register={{
            name: "studying",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          formContainerClass={styles.formContainerClass}
          placeholder="e.g. Engineering"
          className={`${styles.formInput}`}
        />
      </FormRow>
      <FormRow label="Which tags would you choose to describe your identity?">
        <GridContainer>
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
        </GridContainer>
      </FormRow>
      <FormRow label="Which tags represent your interests?">
        <GridContainer>
          {interestTags.map((identity) => (
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
        </GridContainer>
      </FormRow>
      <FormRow label="Which tags represent your passions?">
        <GridContainer>
          {passionTags.map((identity) => (
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
        </GridContainer>
      </FormRow>
      <FormRow label="House or College?">
        <FormInputField
          register={{
            name: "college",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          formContainerClass={styles.formContainerClass}
          placeholder="e.g. House"
          className={`${styles.formInput}`}
        />
      </FormRow>
      <FormRow label="Tell us about yourself">
        <FormInputField
          register={{
            name: "personalInfo",
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
      <FormRow label="What has your journey been like up until now?">
        <FormInputField
          register={{
            name: "journey",
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
      <FormRow label="What are you most proud of?">
        <FormInputField
          register={{
            name: "proud",
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
      <FormRow label="What do you want to achieve in life?">
        <FormInputField
          register={{
            name: "achievement",
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
      <FormRow label="What does being at your university mean to you?">
        <FormInputField
          register={{
            name: "uniValue",
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
      <FormRow label="What are the ways you give back or give to others?">
        <FormInputField
          register={{
            name: "giveBack",
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
      <FormRow label="What do you do to relax or for fun?">
        <FormInputField
          register={{
            name: "activity",
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
      <FormRow label="What do you feel most passionate about?">
        <FormInputField
          register={{
            name: "passionate",
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
      <FormRow label="What is something you have always wanted to try, if time or money was not a factor?">
        <FormInputField
          register={{
            name: "personalWish",
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
      <FormRow label="Why did you decide to do the course you are currently doing?">
        <FormInputField
          register={{
            name: "whyCourse",
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
      <FormRow label="What are some of your own personal goals in the next 5 years?">
        <FormInputField
          register={{
            name: "goals",
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
    </div>
  );
};

export default PreferenceForm;

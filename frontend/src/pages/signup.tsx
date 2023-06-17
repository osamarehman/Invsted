import Layout from "@/components/Layout/Layout";
import { Button, Container, Form } from "react-bootstrap";
import FormInputField from "@/components/form/FormInputField";
import FormSelectField from "@/components/form/FormSelectField";
import styles from "@/styles/AuthenticationForm.module.css";
import FormContainer from "@/components/Containers/FormContainer";
import SocialLoginSection from "@/components/Sections/SocialLoginSection";

export default function Signup() {
  return (
    <Layout>
      <FormContainer headerText="Let's get started!">
        <FormInputField
          register={{
            name: "First Name",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          label="First Name"
          labelClass={styles.formLabel}
          placeholder="e.g. John"
          className={styles.formInput}
        />
        <FormInputField
          register={{
            name: "LastName",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          label="Last Name"
          placeholder="e.g. Wick"
          labelClass={styles.formLabel}
          className={styles.formInput}
        />
        <FormInputField
          register={{
            name: "Email",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          type="email"
          label="Email"
          placeholder="Email"
          labelClass={styles.formLabel}
          className={styles.formInput}
        />
        <FormInputField
          register={{
            name: "Password",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          infoMsgElement={
            <p className={styles.infoMsg}>Must be at least 8 characters</p>
          }
          type="password"
          label="Password"
          labelClass={styles.formLabel}
          placeholder="Password"
          className={styles.formInput}
        />
        <FormSelectField
          label="Status"
          options={["Student", "Investor"]}
          className={styles.formInput}
          labelClass={styles.formLabel}
        />
        <Button className={styles.submitBtn}>Sign Up</Button>
        <SocialLoginSection
          text="Already have an account?"
          linkText="Login Here"
          href="/login"
        />
      </FormContainer>
    </Layout>
  );
}

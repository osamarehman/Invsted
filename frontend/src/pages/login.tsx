import Layout from "@/components/Layout/Layout";
import { Button, Container, Form } from "react-bootstrap";
import FormInputField from "@/components/form/FormInputField";
import styles from "@/styles/AuthenticationForm.module.css";
import FormContainer from "@/components/Containers/FormContainer";
import Link from "next/link";
import SocialLoginSection from "@/components/Sections/SocialLoginSection";

export default function Login() {
  return (
    <Layout>
      <FormContainer
        headerText="Welcome back"
        descriptionText="Sign in using your credentials"
      >
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
          labelClass={styles.formLabel}
          type="password"
          label="Password"
          placeholder="Password"
          className={styles.formInput}
        />
        <Link href={"/"} className={styles.forgetPwdLink}>
          Forgot Password?
        </Link>
        <Button className={styles.submitBtn}>Login</Button>
        <SocialLoginSection
          text="Need an account?"
          linkText="Sign Up"
          href="/signup"
        />
      </FormContainer>
    </Layout>
  );
}

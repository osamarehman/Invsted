import Layout from "@/components/Layout/Layout";
import styles from "@/styles/Students.module.css";
import StudentHomeImage from "@/assets/images/student-home.jpg";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import StepsContainer from "@/components/Containers/StepsContainer";

export default function StudentsHome() {
  return (
    <Layout>
      <StepsContainer
        subTitle="No one does it alone"
        title="Welcome to our community"
        strongText="At invstED, we know every little bit makes a difference."
        normalText="Our platform allows others to provide the every day support you need so you can focus on school, not your struggles"
        linkText="Learn More"
        link="/about"
        src={StudentHomeImage}
      />
    </Layout>
  );
}

import Layout from "@/components/Layout/Layout";
import AboutUsSection from "@/components/Sections/AboutUsSection";
import InfoSection from "@/components/Sections/InfoSection";
import AboutImage4 from "@/assets/images/about-image-4.jpg";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <Layout>
      <AboutUsSection />
      <InfoSection
        src={AboutImage4}
        title={"Our Mission"}
        top="-100px"
        left="-80px"
        textNode={
          <strong className="bold-text-6">
            Our platform creates opportunities for connection, and empowers
            students one dollar and one relationship at a time by reducing
            barriers to higher education through investments, financial
            education and community empowerment.
          </strong>
        }
        justifyContent="end"
        backgroundColor="#69df41"
        titleColor="#fff"
        containerMAXWidth="1000px"
        textSectionStyles={styles.textSectionStyles}
      />
    </Layout>
  );
}

import Layout from "@/components/Layout/Layout";
import AboutUsSection from "@/components/Sections/AboutUsSection";
import InfoSection from "@/components/Sections/InfoSection";
import AboutImage4 from "@/assets/images/about-image-4.jpg";
import styles from "@/styles/About.module.css";
import GeneralCard from "@/components/Cards/GeneralCard";
import { Container } from "react-bootstrap";
import TeamImage1 from "@/assets/images/Brianna-Goodlin.png";
import TeamImage2 from "@/assets/images/Jenna-Hertz.png";
import FAQSection from "@/components/Sections/FAQSection";
import Link from "next/link";
import StorySection from "@/components/Sections/StorySection";

export default function About() {
  return (
    <Layout>
      <AboutUsSection />
      <InfoSection
        src={AboutImage4}
        title={"Our Mission"}
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
        sectionStyle={styles.sectionStyle}
        containerStyle={styles.containerStyle}
        textSectionStyles={styles.textSectionStyles}
        imageStyle={styles.imageStyle}
      />
      {/* <GeneralCard /> */}
      <section id="team-section" className={styles.teamSection}>
        <Container className={styles.teamContainer}>
          <div className={styles.teamTextSection}>
            <h3 className={styles.teamHeading}>Our Team</h3>
            <p className={styles.teamDescription}>
              Learn about the team working to bring more equity to education
            </p>
          </div>
          <div className={styles.teamCardContainer}>
            <GeneralCard
              cardTitle="Brianna Goodlin"
              cardShortDescription="CEO & Founder"
              cardImage={TeamImage1}
              cardMainBody={
                <FAQSection
                  titleStyle={styles.yellow}
                  items={[
                    {
                      id: "brianna",
                      title: "Learn More",
                      content: (
                        <div>
                          <p className={styles.lightWeight} >
                            Brianna has spent her life navigating privileged
                            spaces with a low-income background. She has worked
                            at innovation and growth strategy consulting firms
                            helping Fortune 500 companies build capabilities for
                            change. She is driven by a passion for helping
                            people navigate seemingly intractable problems and
                            find solutions in unexpected places. This animates
                            her personal life, where she has worked in the
                            Israeli-Palestinian conflict space, as well as to
                            address food insecurity, alleviate poverty, combat
                            antisemitism & increase access to education. Brianna
                            holds an MBA from the University of Cambridge, and a
                            BA in Social Studies from Harvard College.
                          </p>
                          <Link
                            href="mailto:ceo@invsted.org"
                            className={styles.yellow}
                          >
                            Email Brianna
                          </Link>
                        </div>
                      ),
                    },
                  ]}
                />
              }
            />
            <GeneralCard
              cardTitle="Jenna Hertz"
              cardShortDescription="COO & Co-Founder"
              cardImage={TeamImage2}
              titleStyle={styles.green}
              cardMainBody={
                <FAQSection
                  titleStyle={styles.green}
                  items={[
                    {
                      id: "jenna",
                      title: "Learn More",
                      content: (
                        <div>
                          <p className={styles.lightWeight} >
                            Jenna is a qualified Chartered Accountant (CA (SA))
                            from South Africa. Jenna has worked as an associate
                            lecturer at Witwatersrand University while pursuing
                            her Masters in Commerce, and as a lead auditor for
                            Deloitte on high risk, large listed corporates in
                            the healthcare and industrial space. Prior to her
                            MBA with Cambridge University, she worked as a
                            senior financial analyst in FP&A for Edge by
                            Ascential, a SaaS data-analytics firm. Jenna is
                            passionate about driving equity and upliftment
                            through education and was a Thuthuka mentor to over
                            300 aspiring CAs from disadvantaged backgrounds and
                            also assisted with the social transformation of the
                            Finance course.
                          </p>
                          <Link
                            href="mailto:ceo@invsted.org"
                            className={styles.green}
                          >
                            Email Jenna
                          </Link>
                        </div>
                      ),
                    },
                  ]}
                />
              }
            />
          </div>
        </Container>
      </section>
      <StorySection maxWidth={824} />
    </Layout>
  );
}

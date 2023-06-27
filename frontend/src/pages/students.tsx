import Layout from "@/components/Layout/Layout";
import styles from "@/styles/Students.module.css";
import StudentImage from "@/assets/images/Jezz.png";
import StudentHomeImage from "@/assets/images/student-home.jpg";
import StudentHomeImage21 from "@/assets/images/student-home-21.png";
import StudentHomeImage22 from "@/assets/images/student-home-22.png";
import StudentHomeImage23 from "@/assets/images/student-home-23.png";
import StudentHomeImage3 from "@/assets/images/student-home-3.png";
import StudentHomeImage4 from "@/assets/images/student-home-4.png";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import StepsContainer from "@/components/Containers/StepsContainer";
import IFrameContainer from "@/components/Containers/IFrameContainer";
import { InvstedStudentHomeLink } from "@/config";
import ValueSection from "@/components/Sections/ValueSection";
import { InvstedBenefits } from "@/config/values";
import GeneralCard from "@/components/Cards/GeneralCard";
import WhyInvstedSection from "@/components/Sections/WhyInvstedSection";

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
        titleStyle={styles.welcomeTitle}
        linkStyle={`${styles.width100} ${styles.linkHover}`}
        src={StudentHomeImage}
      />
      <WhyInvstedSection
        textCardTitle1="Food Insecurity"
        textCardTitle2="Burden of work"
        textCardTitle3="Mental health"
        textCardTitle4="Family obligations"
        textDesc1="Have you had to skip a meal or a night out with friends because you don't have the money?"
        textDesc2="Have you had to work while in school to meet your obligations or to keep up with the costs?"
        textDesc3="Has your mental health suffered due to worry about money, or anxiety because what you have is never enough?"
        textDesc4="Have you had to worry about your family's financial state, or even take care of them while in school?"
        title="Is invstED right for me?"
        text={
          <p>
            We know that everyone’s circumstances are different. Household
            income and student loans are a poor proxy for a person’s individual
            needs.
            <br />
            <br />
            We want to make sure there are no barriers to support and you have
            access to the channels you need to get to a place of financial
            stability and freedom.
          </p>
        }
      />
      <section
        id="learn-more"
        className={`${styles.paddingY} ${styles.stepSection}`}
      >
        <Container className={`${styles.stepContainer} flex-column`}>
          <h1
            className={`${styles.title} ${styles.titleSteps} ${styles.textYellow} mt-3`}
          >
            How it works
          </h1>
          <p className={`${styles.description} ${styles.lineHeight24}`}>
            <strong>
              Through invstED, getting everyday financial support is easier and
              more accessible. Students receive money they need while building
              their networks and becoming a part of a community.
            </strong>
            <br />
            <br />
            At invstED, we know that every little bit can make a difference, and
            we aim to create opportunities for others to provide the every day
            support you need so you can focus on school, not your struggles.​
          </p>
          <IFrameContainer IframeSrc={InvstedStudentHomeLink} />
        </Container>
      </section>
      <StepsContainer
        subTitle="Step One"
        title="Create your profile"
        strongText="Fill out our form to build your profile, sharing your interests, passions, and experiences."
        normalText="You choose how much you share and what you put on your profile!"
        linkText="Create Profile"
        link="/student-quiz"
        containerStyle={`${styles.reverse} ${styles.gap}`}
        linkStyle={`${styles.widthFitContent} ${styles.linkHoverCreateProfile}`}
        sectionStyle={`${styles.bgGrey} ${styles.height600}`}
        titleStyle={styles.titleSteps}
      >
        <div className={styles.gallery}>
          <Image
            className={`${styles.galleryImg} ${styles.customImage1}`}
            alt="create-profile-gallery"
            src={StudentHomeImage21}
          />
          <Image
            className={`${styles.galleryImg} ${styles.customImage2}`}
            alt="create-profile-gallery"
            src={StudentHomeImage22}
          />
          <Image
            className={`${styles.galleryImg} ${styles.customImage3}`}
            alt="create-profile-gallery"
            src={StudentHomeImage23}
          />
        </div>
      </StepsContainer>
      <StepsContainer
        subTitle="Step Two"
        title="Provide your bank info"
        strongText="Share your bank information, so donations can be sent directly to you."
        normalText="All your information will be stored and secured in Stripe."
        linkText="Bank Info"
        link="/student-profile"
        src={StudentHomeImage3}
        containerStyle={styles.gap}
        linkStyle={`${styles.widthFitContent} ${styles.linkHoverCreateProfile}`}
        titleStyle={styles.titleSteps}
        imageStyle={styles.smallImage}
      />
      <StepsContainer
        subTitle="Step Three"
        title="Share your profile"
        strongText="Once your profile has been published, you can share with your friends and family."
        normalText="You can find and share with your network, creating an easy way for others to support you"
        linkText="Share Now"
        link="/give"
        src={StudentHomeImage4}
        containerStyle={`${styles.reverse} ${styles.gap}`}
        sectionStyle={styles.bgGrey}
        linkStyle={`${styles.widthFitContent} ${styles.linkHoverCreateProfile}`}
        titleStyle={styles.titleSteps}
        imageStyle={styles.smallImage}
      />
      <section
        id="learn-more"
        className={`${styles.paddingY} ${styles.stepSection}`}
      >
        <Container className={`${styles.stepContainer} flex-column`}>
          <h1
            className={`${styles.title} ${styles.titleSteps} ${styles.textYellow} mt-3`}
          >
            Learn more
          </h1>
          <p className={`${styles.description} ${styles.lineHeight24}`}>
            The benefit of joining invstED, is that you can create a profile to
            highlight your passions and goals, and then share this with family
            and friends so that they can invest in you.
            <br />
            <br />
            You can also choose to be discoverable to our broader investor
            network, so others can be inspired by you, and provide support. We
            view financial support as the first step in a longer journey of
            building out your network and building up your cultural capital.
          </p>
          <IFrameContainer IframeSrc={InvstedStudentHomeLink} />
        </Container>
      </section>
      <section id="why-you-should-join" className={styles.stepSection}>
        <Container className={`${styles.stepContainer} flex-column`}>
          <h6 className={styles.subHeading}>Student benefits</h6>
          <h1
            className={`${styles.title} ${styles.titleSteps} ${styles.textYellow} mt-3`}
          >
            Why should you join invstED?
          </h1>
          <ValueSection
            config={InvstedBenefits}
            containerClass={styles.reverse}
          />
        </Container>
      </section>
      <section id="why-you-should-join" className={styles.stepSection}>
        <Container className={`${styles.stepContainer} flex-column`}>
          <h1
            className={`${styles.title} ${styles.titleSteps} ${styles.textYellow} mt-3`}
          >
            Meet our Ambassadors
          </h1>
          <div className={styles.cardContainer}>
            {[1, 2, 3, 4, 5, 6].map((val) => {
              return (
                <GeneralCard
                  key={val}
                  cardTitle="Jezz"
                  titleStyle={styles.titleStyle}
                  cardImage={StudentImage}
                  cardStyle={styles.cardStyle}
                  cardMainBody={
                    <div className={styles.cardBody}>
                      <p className={styles.university}>Engineering</p>
                      <p className={styles.university}>
                        <strong>University of Cambridge</strong>
                      </p>
                      <Link
                        className={styles.viewLink}
                        href={"mailto:jb2433@cam.ac.uk"}
                      >
                        Email Jezz
                      </Link>
                    </div>
                  }
                />
              );
            })}
          </div>
          <div>
            <h1
              className={`${styles.title} ${styles.titleSteps} ${styles.textYellow} mt-3 ${styles.fontSize30}`}
            >
              Want to learn more?
            </h1>
            <p className={`${styles.description} ${styles.lineHeight24}`}>
              If you are interested in becoming an ambassador, or bringing
              invstED to your school, please email{" "}
              <strong className={styles.textBlue}>questions@invsted.org</strong>
            </p>
          </div>
        </Container>
      </section>
      <section
        className={`${styles.stepSection} ${styles.joinCommunitySection} d-flex`}
      >
        <Container className={`${styles.stepContainer} flex-column`}>
          <h1 className={`${styles.title} ${styles.titleSteps} text-center`}>
            Join our Community
          </h1>
          <Link className={styles.btnWhite} href="/signup">
            Sign Up
          </Link>
        </Container>
      </section>
    </Layout>
  );
}

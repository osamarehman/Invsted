import ImageCard from "@/components/Cards/ImageCard";
import Layout from "@/components/Layout/Layout";
import styles from "@/styles/Investors.module.css";
import Link from "next/link";
import { Container } from "react-bootstrap";
import InvestorEquityFundImg from "@/assets/images/investor-home-equity-fund.png";
import InvestorQuizImg from "@/assets/images/investor-home-quiz.png";
import InvestorStudentsImg from "@/assets/images/investor-home-students.png";
import InvestorDonateImg from "@/assets/images/investor-home-donate.jpg";
import QuoteImg from "@/assets/images/quote.png";
import WhyInvstedSection from "@/components/Sections/WhyInvstedSection";
import IFrameContainer from "@/components/Containers/IFrameContainer";
import { InvstedInvestorsHomeLink } from "@/config";
import StepCard from "@/components/Cards/StepCard";
import TextCarousel from "@/components/Carousel";
import Image from "next/image";
import StepsContainer from "@/components/Containers/StepsContainer";

export default function Investors() {
  return (
    <Layout>
      <section className={styles.stepSection}>
        <Container className={styles.stepContainer}>
          <div className={styles.bgInvestor}></div>
          <div className={styles.textSection}>
            <h6 className={`${styles.smallHeading} ${styles.textWhite}`}>
              INVESTORS
            </h6>
            <h1 className={`${styles.heading} ${styles.textWhite}`}>
              IT PAYS <br /> TO GIVE
            </h1>
            <Link
              className={`${styles.link} ${styles.textWhite} ${styles.borderBottomWhite}`}
              href="/signup"
            >
              Invest in someone today
            </Link>
            <Link
              className={`${styles.linkBtn} ${styles.bgWhite}`}
              href="/signup"
            >
              Join Now
            </Link>
          </div>
        </Container>
      </section>
      <section className={`${styles.stepSection} ${styles.marginTop100}`}>
        <Container className={`${styles.stepContainer} flex-column`}>
          <div className={styles.sectionTitleWide}>
            <h1 className={`${styles.heading} ${styles.textBlue}`}>
              Why invstED?
            </h1>
            <p className={styles.sectionTitleDesc}>
              We believe in the power of investing in others. <br /> <br />
              We believe giving is an investment tool that can transform
              outcomes for ourselves, for the next generation and for the world.
            </p>
          </div>
          <div className={styles.sectionDescriptionWide}>
            <h2 className={`${styles.sectionDesc} ${styles.textBlue}`}>
              At invstED, we aim to make it easier to give & feel as if every
              gift, no matter how small, makes a difference.
            </h2>
          </div>
        </Container>
      </section>
      <section className={`${styles.stepSection} ${styles.marginBottom100}`}>
        <Container className={`${styles.stepContainer} flex-column`}>
          <div className={styles.imageCardContainer}>
            <ImageCard
              cardImage={InvestorEquityFundImg}
              cardTitle="Equity Fund"
              cardStyle={styles.imageLeft}
              cardShortDescription="Not sure who to donate to? Our Equity Fund sends your donation to students who need it most"
              linkHref="/equity-fund"
              linkText="EQUITY FUND"
            />
            <ImageCard
              cardImage={InvestorStudentsImg}
              cardTitle="Discover Students"
              cardStyle={styles.imageBig}
              imageStyle={styles.imageStyle}
              descriptionStyle={styles.maxWidth300}
              cardShortDescription="Browse our students, read their profiles, and find someone you want to donate directly to"
              linkHref="/give"
              linkText="FIND STUDENTS"
            />
            <ImageCard
              cardImage={InvestorQuizImg}
              cardTitle="Investor Quiz"
              cardStyle={styles.imageRight}
              cardShortDescription="New investor? Take our quiz to share your preferences & get matched with a student"
              linkHref="/investor-quiz"
              linkText="INVESTOR QUIZ"
            />
          </div>
          <Link className={`${styles.linkBtn} ${styles.bgBlue}`} href="/signup">
            JOIN TODAY
          </Link>
        </Container>
      </section>
      <WhyInvstedSection
        textCardTitle1="Effective altruism"
        textCardTitle2="Connection & impact"
        textCardTitle3="Lower barriers to entry"
        textCardTitle4="Transparency & control"
        textDesc1="By choosing to give more effectively, you are ensuring that your money goes further."
        textDesc2="As an investor, you develop connections and get to see the short and long-term impact of your giving."
        textDesc3="With invstED, it is easier to give directly to someone & to feel as if every small gift makes a difference."
        textDesc4="Through invstED, you can choose exactly who your money is going to and see how it is being spent."
        containerBg1="blue"
        containerBg2="green"
        containerBg3="yellow"
        isTextWhite1={true}
        isTextWhite3={false}
        isTextWhite4={true}
        titleStyle={styles.textBlue}
        title="Why should you be an investor?"
        text={
          <p>
            It can be easy to get overwhelmed, and feel as if there is little
            you can do. At invstED, every little bit counts. Even small gifts
            can have big impact.​
            <br />
            <br />
            By giving through invstED, your money is going directly to who it is
            meant to help, not into some large organisation. This means you can
            see your impact, and know your money matters.
          </p>
        }
      />
      <section
        id="learn-more"
        className={`${styles.marginTop100} ${styles.stepSection}`}
      >
        <Container className={`${styles.stepContainer} flex-column`}>
          <h1
            className={`${styles.heading} ${styles.titleSteps} ${styles.textBlue} mt-3`}
          >
            How it works
          </h1>
          <p className={`${styles.description} ${styles.lineHeight24}`}>
            <strong>
              With invstED, you have control on where and how you give, and
              transparency in how your money is spent.
            </strong>
            <br />
            <br />
            The benefit of giving through invstED, is that you can see and
            choose exactly where your money goes, and to whom. You are able to
            develop a connection with a student, and see both the short-term
            impact of your giving, along with the long-term impact of a
            student&#39;s success.
            <br />
            <br />
            At invstED, we aim to make it easier to give, and to feel as if
            every gift, no matter how small, makes a difference in someone&#39;s
            life. ​
          </p>
          <IFrameContainer IframeSrc={InvstedInvestorsHomeLink} />
        </Container>
      </section>
      <section
        id="learn-more"
        className={`${styles.marginTop100} ${styles.stepSection} ${styles.stepCardSection} ${styles.marginBottom0}`}
      >
        <Container className={`${styles.stepContainer} flex-column`}>
          <h1
            className={`${styles.heading} ${styles.titleSteps} ${styles.textBlack} ${styles.maxWidth600} mt-3`}
          >
            What does it mean to be an investor?
          </h1>
          <div className={styles.cardContainer}>
            <StepCard
              step={1}
              color={"blue"}
              heading={"Invest in someone"}
              linkText="Join Today"
              linkHref="/signup"
              bgColor="blue"
              description={`Being an investor is so much more than just donating money. We consider our investors as active participants in the success of students. They are invested in their lives and invested in their future.`}
            />
            <StepCard
              step={2}
              color={"green"}
              heading={"See your impact"}
              linkText="Find Students"
              linkHref="/give"
              bgColor="green"
              description={`There are so many ways to invest & to see the impact of your giving. We believe in the power of investing in others and the next generation. Thus, the return on investment is not financial, but instead emotional.`}
            />
            <StepCard
              step={3}
              color={"yellow"}
              heading={"Help someone succeed"}
              linkText="Donate Today"
              linkHref="/equity-fund"
              bgColor="yellow"
              description={`As an investor, you see a student’s success & growth up close, through regular progress updates and newsletters. Investing in a student means knowing you were a critical part of their story & success.`}
            />
          </div>
        </Container>
      </section>
      <section
        id="learn-more"
        className={`${styles.stepSection} ${styles.marginBottom0} ${styles.marginTop0} ${styles.bgBlue}`}
      >
        <Container
          className={`${styles.stepContainer} flex-column ${styles.customGap}`}
        >
          <Image src={QuoteImg} width={78} alt="quote" />
          <TextCarousel
            quotes={[
              '"It is powerful to think of investing in someone so they can become everything they want to. Being an investor shows you are an active part of their life, not just a passive observer."',
              `"I love investing in a student and knowing that my donation is contributing to them becoming something they otherwise would not be able to become."`,
              `"I chose invstED because I wanted to find someone that hasn't had the same opportunities as I have had, but could have them because of my donation."`,
              `"If I give to a big organisation, for all I know my money is going to marketing or something. When I give through invstED, I know my money is going directly to a student who needs it."`,
            ]}
          />
        </Container>
      </section>
      <StepsContainer
        containerStyle={styles.justifySpaceAround}
        sectionStyle={``}
        imageStyle={``}
        src={InvestorDonateImg}
        isTextSection={false}
      >
        <div className={styles.equitySection}>
          <h1 className={styles.equitySubHeading}>Donate to our</h1>
          <h1 className={styles.equityHeading}>Equity Fund</h1>
          <p>
            Rather than donating to a specific student, you can instead choose
            to donate directly to our <strong className={styles.textBlue}>Equity Fund.</strong> This money
            is designed to counter biases and work actively toward equity.
            <br />
            <br />
            When you donate to our Equity Fund, we take your donation and
            distribute it to students who need support but might not be getting
            invested in. We use this money to actively fight against common
            biases that show up, such as racial and pretty bias.
            <br />
            <br />
            By donating to our Equity Fund, you are ensuring that your
            investment is going toward the students who need support the most.
          </p>
          <Link className={styles.equityLink} href="/equity-fund">Donate Today</Link>
        </div>
      </StepsContainer>
      <section id="join-community-section" className={styles.communitySection}>
        <div className={styles.imageOverlay}>
          <Container className={styles.communityContainer}>
            <div className={styles.communityTextSection}>
              <p className={styles.communityText}>
                Be a part of someone&#39;s success
              </p>
              <Link href="/" className={styles.communitylink}>
                Join Now
              </Link>
            </div>
          </Container>
        </div>
      </section>
    </Layout>
  );
}

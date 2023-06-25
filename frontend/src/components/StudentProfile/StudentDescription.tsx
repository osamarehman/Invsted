import styles from "@/styles/StudentQualification.module.css";
import Description from "@/components/StudentProfile/Description";

const StudentDescription = () => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          Get to know &nbsp;<span className={styles.headingName}>Jezz</span>
        </h1>
      </div>
      <Description
        title="A little bit about Jezz"
        answer="I am a first-generation, low income student studying Human, Social and Political Sciences at Jesus, College Cambridge. As the first in my immediate family to finish high school, I am acutely aware of the transformational potential of educational opportunity. I am incredibly passionate about social mobility and a strong advocate for all things access. When not working on such things you will likely find me on the basketball court or with friends."
      />
      <Description
        title="What are the ways you give back or give to others?"
        answer="I work part-time at my old high school as a Pupil Premium mentor and tutor working with disadvantaged kids who lack confidence and skills to reach their full potential. It is amazingly rewarding to work at a place that was vital in my personal and professional development and to give back by helping others become the best version of themselves. I continue to engage with various access programmes to give students support on their journey to university. Lastly, as the President of the Jesus College and the President of the Class Act Campaign (the campaign that represents the economically and socially disadvantage) I follow in the footsteps of many that have tried to make Cambridge a more inclusive and diverse place"
      />
      <Description
        title="What is something you have always wanted to try, if time or money was not a factor?"
        answer="I would particularly love the opportunity to travel more and spend an extended period of time in another countries so that I can fully immerse myself in the culture and language"
      />
      <Description
        title="Why did you decide to do the course you are currently doing?"
        answer="I have a real passion to make a change in this world. I think too often those with the real power to do so don't necessarily have a full understanding of the issues that plague society or through personal privilege are ignorant to them. I believe that my degree course - Human, Social and Political Sciences - gives me a strong foundation to understand the complexities of different societies and different issues and a knowledge of the political means through which change can be made. I hope that my course will continue to give me the knowledge and skills so that I can understand and emphasise with others who I do necessarily share personal experience with"
      />
    </div>
  );
};

export default StudentDescription;

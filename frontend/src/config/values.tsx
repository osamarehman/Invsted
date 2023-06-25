import ResiliencyImg from "@/assets/images/value-section-img-2.jpg";
import EducationImg from "@/assets/images/value-section-img-1.jpg";
import IntegrityImg from "@/assets/images/value-section-img-4.jpg";
import ImpactImg from "@/assets/images/value-section-img-3.jpeg";
import EquityImg from "@/assets/images/value-section-img-5.jpg";
import CommunityStudentImg1 from "@/assets/images/community-students.png";
import CommunityStudentImg2 from "@/assets/images/community-students-2.png";
import CommunityStudentImg3 from "@/assets/images/community-students-3.png";
import { StaticImageData } from "next/image";

export interface IInvstedValues {
  title: string;
  img: StaticImageData;
  content: string;
}

export const InvstedValues = [
  {
    title: "Resilience",
    img: ResiliencyImg,
    content:
      "Resilience is not a word we use lightly. Resilience is power & strength, but doesn't come without a cost. Resilience often comes from suffering & adversity. It comes from a lack of opportunity or resources. And so, at InvstED, we recognize the importance of resilience, but also aim to create a world where resilience comes from challenges & hard work, rather than suffering & survival.",
  },
  {
    title: "Education",
    img: EducationImg,
    content:
      "Education is powerful, and has the potential to transform lives. But without opportunity or accessibility, education only serves to further solidify existing power structures. By creating more opportunity for those from lower incomes, and making higher education more accessible, we aim to enable education to be the great equalizer that we always wanted it to be.",
  },
  {
    title: "Impact",
    img: ImpactImg,
    content:
      "We understand a little goes a long way. What may be small to you can make a world of difference to someone else. We also know that seeing impact is powerful and creates further incentives to give. That is why we connect low-income students with investors & enable sustained and visible impact.",
  },
  {
    title: "Integrity",
    img: IntegrityImg,
    content:
      "Integrity is what grounds us. It allows us to trust each other, and to trust those we aim to help. Integrity is what ensures that we are all here for the right reasons, that we all want to make an impact, and that we will do it in the right way. Integrity means we will do all we can to empower students, enable investors, create connections, and build trust.",
  },
  {
    title: "Equity",
    img: EquityImg,
    content:
      "We are driven by a fundamental belief in equity. While we do not live in an equitable world, every effort made and every dollar spent toward equity has a compounding effect and creates exponential impact and benefits.",
  },
];

export const InvstedBenefits = [
  {
    title: "Join a community of students",
    img: CommunityStudentImg1,
    content: `The most important factor for the success of any community is its people. \n
      High-achieving, low-income students at elite universities can often feel isolated, and that no one understands their situation. Through invstED, these students join a large community of peers as well as gain access to a network of investors who not only help ease financial burdens, but can serve as mentors and counselors.
      `,
  },
  {
    title: "Get the support you need",
    img: CommunityStudentImg2,
    content: `Too often, monetary gifts come with a host of stipulations and conditions. The barriers to getting scholarships, bursaries and loans can be a significant burden, and their limitations can miss the reality of your needs.  \n
    At invstED, we know that students are in the best position to know what they need and when they need it. Investors provide students with the financial ability to see to their own needs, and get direct support.
      `,
  },
  {
    title: "Build your cultural capital",
    img: CommunityStudentImg3,
    content: `T“Cultural capital” refers to the social assets of a person (education, intellect, style of speech, style of dress, etc.) that promote social mobility. What this means in reality is that those with more resources, or the right social support, are better equipped to navigate the world. \n
    At invstED, we recognize the impact that a lack of cultural capital can have on first-generation, low-income students being able to take full advantage of the opportunities they have at university. By connecting students with a network of investors, we are trying to bridge that gap and ensure that every student, no matter their socioeconomic status, can fully embrace what university offers them.
      `,
  },
];

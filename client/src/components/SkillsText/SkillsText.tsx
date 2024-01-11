import {
  ButtonGroupContainer,
  MainButton,
  PageText,
  PageTextSection,
} from "..";
import { useActiveView } from "../../contexts";

const text = [
  "As a versatile full-stack developer, I craft captivating and responsive user interfaces seamlessly integrated with robust backend solutions.",
  "I’ve worked with a wide arsenal of technologies, including Python, PostgresSQL, Firebase and Nextjs. My expertise truly shines through the MERN stack, where I harness the full power of Javascript’s extensive ecosystem to build comprehensive web applications from the ground up.",
  "My toolkit extends beyond technology. I am a fluid communicator, adaptable team member and a natural problem solver. Whether I'm working solo or as part of a team, I thrive on overcoming challenges. ",
];

export const SkillsText = () => {
  const { setActiveView } = useActiveView();

  return (
    <PageTextSection>
      <PageText headingText="More than tech" paragraphText={text} />
      <ButtonGroupContainer>
        <MainButton text="See my CV" onClick={() => console.log("boop")} />
        <MainButton
          primary
          text="See my work"
          onClick={() => setActiveView("projects")}
        />
      </ButtonGroupContainer>
    </PageTextSection>
  );
};

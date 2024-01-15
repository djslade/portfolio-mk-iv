import {
  ButtonGroupContainer,
  MainButton,
  PageText,
  PageTextSection,
} from "..";
import { useActiveView } from "../../contexts";

const text = [
  "I'm a skilled full-stack developer with expertise in various technologies like JavaScript, Python, React, MongoDB, SQL, and more. I use these tools to create strong web applications. Alongside my technical expertise, my effective communication, product-focused mindset and problem-solving abilities make me a valuable asset for any team or project.",
];

export const SkillsText = () => {
  const { setActiveView } = useActiveView();

  return (
    <PageTextSection>
      <PageText headingText="My toolkit" paragraphText={text} />
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

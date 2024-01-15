import {
  ButtonGroupContainer,
  MainButton,
  PageText,
  PageTextSection,
} from "..";
import { useActiveView } from "../../contexts";

const text: string[] = [
  "My name’s David and I’m a self taught web developer. I currently live in south Finland with my amazing wife and our two cats.",
  "During the pandemic I decided to teach myself how to code, andright away I knew that I had found my calling in life.",
  "After two years of carefully refining my skills, I landed my first job as a full stack developer, where I've gained an incredible amount of experience maintaining an enterprise-level application in a high-tempo startup environment. Today I am a confident and capable developer, eager to push my limits and chase new horizons.",
  "When I’m not at my computer you’ll usually find me in the kitchen. I’m very passionate about cooking, and I enjoy learning new recipes and preparing them for my family. I’m also an avid gamer and a huge history nerd.",
];

export const AboutText = () => {
  const { setActiveView } = useActiveView();

  return (
    <PageTextSection>
      <PageText headingText="My story" paragraphText={text} />
      <ButtonGroupContainer>
        <MainButton text="See my CV" onClick={() => console.log("boop")} />
        <MainButton
          primary
          text="Get in touch"
          onClick={() => setActiveView("contact")}
        />
      </ButtonGroupContainer>
    </PageTextSection>
  );
};

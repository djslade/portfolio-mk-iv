import {
  ButtonGroupContainer,
  MainButton,
  PageText,
  PageTextSection,
} from "..";

const text = [
  "I'm a skilled full-stack developer with expertise in various technologies like JavaScript, Python, React, MongoDB, SQL, and more. I use these tools to create strong web applications. Alongside my technical expertise, my effective communication, product-focused mindset and problem-solving abilities make me a valuable asset for any team or project.",
];

export const SkillsText = () => {
  return (
    <PageTextSection>
      <PageText headingText="My toolkit" paragraphText={text} />
      <ButtonGroupContainer>
        <MainButton link href="/David-Slade-CV.pdf" text="See my CV" />
        <MainButton routerLink href="/projects" primary text="See my work" />
      </ButtonGroupContainer>
    </PageTextSection>
  );
};

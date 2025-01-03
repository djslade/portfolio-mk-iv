import {
  ButtonGroupContainer,
  MainButton,
  PageText,
  PageTextSection,
} from "..";

const text = [
  "I pride myself on my versatility. Alongside my diverse toolkit of client and server-focused technologies, I also have experience working across several different operating systems, deploying projects in containers, and self-hosting my work via cloud and VPS. I bring a product-focused, problem-solving mindset to my work, and I know the value of listening to clients and team members when they have concerns or feedback.",
];

export const SkillsText = () => {
  return (
    <PageTextSection>
      <PageText headingText="My toolkit" paragraphText={text} />
      <ButtonGroupContainer>
        <MainButton routerLink href="/contact" text="Get in touch" />
        <MainButton routerLink href="/projects" primary text="See my work" />
      </ButtonGroupContainer>
    </PageTextSection>
  );
};

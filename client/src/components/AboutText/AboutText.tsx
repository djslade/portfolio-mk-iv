import {
  ButtonGroupContainer,
  MainButton,
  PageText,
  PageTextSection,
} from "..";
import classes from "./AboutText.module.scss";

const text: string[] = [
  "My name’s David and I’m a full stack web developer. I currently live in Finland with my amazing wife and our two cats.",
  "Originally from the UK, I moved to Finland to build a life with my partner, and it was here where I discovered my passion for programming. Although the last few years have at times proved challenging, I'm very lucky to be able to live in such a beautiful country and work in a field that I love.",
  "Outside of my work, I’m very passionate about cooking. I enjoy learning new recipes and preparing them for my family. I'm also a huge fan of all kinds of fiction, and I'm always on the lookout for a new book to read or show to watch. If you have a recommendation I'd love to hear it!",
];

export const AboutText = () => {
  return (
    <PageTextSection>
      <img src="/about-me-desktop.jpg" className={classes.aboutTextImage} />
      <PageText headingText="My story" paragraphText={text} />
      <ButtonGroupContainer>
        <MainButton routerLink href="/contact" text="Get in touch" />
        <MainButton routerLink href="/projects" primary text="See my work" />
      </ButtonGroupContainer>
    </PageTextSection>
  );
};

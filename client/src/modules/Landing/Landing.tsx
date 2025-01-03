import {
  ButtonGroupContainer,
  MainButton,
  PageContentContainer,
} from "../../components";
import classes from "./Landing.module.scss";

export const Landing = () => {
  return (
    <PageContentContainer>
      <h2 className={classes.landingText}>
        Hi there, I'm David. I'm a full stack develper based in Finland and I build and host apps for the internet. Thanks for visiting!
      </h2>
      <ButtonGroupContainer>
        <MainButton text="Get in touch" routerLink href="/contact" />
        <MainButton primary text="See my work" routerLink href="/projects" />
      </ButtonGroupContainer>
    </PageContentContainer>
  );
};

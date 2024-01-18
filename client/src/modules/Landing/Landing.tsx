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
        Hello, my name is <span>David</span>. I create{" "}
        <span>beautiful, full stack</span> web experiences with{" "}
        <span>secure</span> technologies and <span>clean and scalable</span>{" "}
        code.
      </h2>
      <ButtonGroupContainer>
        <MainButton text="Get in touch" routerLink href="/contact" />
        <MainButton primary text="See my work" routerLink href="/projects" />
      </ButtonGroupContainer>
    </PageContentContainer>
  );
};

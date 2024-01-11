import { useActiveView } from "../../contexts";
import {
  ButtonGroupContainer,
  MainButton,
  PageContentContainer,
} from "../../components";
import classes from "./Landing.module.scss";

export const Landing = () => {
  const { setActiveView } = useActiveView();
  return (
    <PageContentContainer>
      <h2 className={classes.landingText}>
        Hello, my name is <span>David</span>. I create{" "}
        <span>beautiful, full stack</span> web experiences with{" "}
        <span>secure</span> technologies and <span>clean and scalable</span>{" "}
        code.
      </h2>
      <ButtonGroupContainer>
        <MainButton
          text="Get in touch"
          onClick={() => setActiveView("contact")}
        />
        <MainButton
          primary
          text="See my work"
          onClick={() => setActiveView("projects")}
        />
      </ButtonGroupContainer>
    </PageContentContainer>
  );
};

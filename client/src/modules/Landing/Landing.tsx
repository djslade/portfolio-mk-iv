import {
  ButtonGroupContainer,
  MainButton,
  PageContentContainer,
} from "../../components";
import classes from "./Landing.module.scss";
import { useSiteNavigate } from "../../hooks";

export const Landing = () => {
  const navigate = useSiteNavigate();

  return (
    <PageContentContainer>
      <h2 className={classes.landingText}>
        Hello, my name is <span>David</span>. I create{" "}
        <span>beautiful, full stack</span> web experiences with{" "}
        <span>secure</span> technologies and <span>clean and scalable</span>{" "}
        code.
      </h2>
      <ButtonGroupContainer>
        <MainButton text="Get in touch" onClick={() => navigate("contact")} />
        <MainButton
          primary
          text="See my work"
          onClick={() => navigate("projects")}
        />
      </ButtonGroupContainer>
    </PageContentContainer>
  );
};

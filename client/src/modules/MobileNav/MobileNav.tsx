import { PageContentContainer } from "../../components";
import { useActiveView } from "../../contexts";
import { useSiteNavigate } from "../../hooks";
import classes from "./MobileNav.module.scss";

export const MobileNav = () => {
  const { activeView } = useActiveView();

  const navigate = useSiteNavigate();

  return (
    <PageContentContainer>
      <nav className={classes.nav}>
        <button
          className={activeView === "about" ? classes.active : ""}
          onClick={() => navigate("about")}
        >
          About
        </button>
        <button
          className={activeView === "skills" ? classes.active : ""}
          onClick={() => navigate("skills")}
        >
          Skills
        </button>
        <button
          className={activeView === "contact" ? classes.active : ""}
          onClick={() => navigate("contact")}
        >
          Contact
        </button>
        <button
          onClick={() => navigate("projects")}
          className={
            activeView === "projects" ? classes.active : classes.primary
          }
        >
          See my work
        </button>
      </nav>
    </PageContentContainer>
  );
};

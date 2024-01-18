import { motion } from "framer-motion";
import { useActiveView, useMobileNavView } from "../../contexts";
import classes from "./Header.module.scss";
import { Menu, X } from "react-feather";
import { useSiteNavigate } from "../../hooks";

interface Props {
  scrolling: boolean;
}
export const Header = ({ scrolling }: Props) => {
  const { activeView } = useActiveView();
  const { mobileNavView, setMobileNavView } = useMobileNavView();
  const navigate = useSiteNavigate();

  return (
    <header
      className={`${classes.header} ${
        scrolling ? classes.scrollingHeader : ""
      }`}
    >
      <button
        className={classes.logoButton}
        onClick={() => navigate("landing")}
      >
        <img src="/portfolio-logo.svg" alt="David Slade" />
      </button>
      <button
        className={classes.mobileMenuButton}
        onClick={() => setMobileNavView(!mobileNavView)}
      >
        {mobileNavView ? <X /> : <Menu />}
      </button>
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
    </header>
  );
};

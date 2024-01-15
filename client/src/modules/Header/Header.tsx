import { motion } from "framer-motion";
import { useActiveView } from "../../contexts";
import classes from "./Header.module.scss";

export const Header = () => {
  const { activeView, setActiveView } = useActiveView();

  return (
    <motion.div layout="position" className={classes.header}>
      <button
        className={classes.logoButton}
        onClick={() => setActiveView("landing")}
      >
        <img src="/portfolio-logo.svg" alt="David Slade" />
      </button>
      <nav className={classes.nav}>
        <button
          className={activeView === "about" ? classes.active : ""}
          onClick={() => setActiveView("about")}
        >
          About
        </button>
        <button
          className={activeView === "skills" ? classes.active : ""}
          onClick={() => setActiveView("skills")}
        >
          Skills
        </button>
        <button
          className={activeView === "contact" ? classes.active : ""}
          onClick={() => setActiveView("contact")}
        >
          Contact
        </button>
        <button
          onClick={() => setActiveView("projects")}
          className={
            activeView === "projects" ? classes.active : classes.primary
          }
        >
          See my work
        </button>
      </nav>
    </motion.div>
  );
};

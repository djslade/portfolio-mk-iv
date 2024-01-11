import { motion } from "framer-motion";
import { useActiveView } from "../../contexts";
import classes from "./Header.module.scss";

export const Header = () => {
  const { setActiveView } = useActiveView();

  return (
    <motion.div layout="position" className={classes.header}>
      <button
        className={classes.logoButton}
        onClick={() => setActiveView("landing")}
      >
        <img src="/portfolio-logo.svg" alt="David Slade" />
      </button>
      <nav className={classes.nav}>
        <button onClick={() => setActiveView("about")}>About</button>
        <button onClick={() => setActiveView("skills")}>Skills</button>
        <button onClick={() => setActiveView("contact")}>Contact</button>
        <button onClick={() => setActiveView("projects")} className="nav-cta">
          See my work
        </button>
      </nav>
    </motion.div>
  );
};

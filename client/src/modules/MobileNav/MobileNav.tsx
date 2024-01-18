import { Link, useLocation } from "react-router-dom";
import { PageContentContainer } from "../../components";
import classes from "./MobileNav.module.scss";
import { useMobileNavView } from "../../contexts";

export const MobileNav = () => {
  const location = useLocation();

  const { setMobileNavView } = useMobileNavView();

  const navigate = () => {
    setMobileNavView(false);
  };

  return (
    <PageContentContainer>
      <nav className={classes.nav}>
        <Link
          to="/about"
          className={location.pathname === "/about" ? classes.active : ""}
          onClick={navigate}
        >
          About
        </Link>
        <Link
          to="/skills"
          className={location.pathname === "/skills" ? classes.active : ""}
          onClick={navigate}
        >
          Skills
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? classes.active : ""}
          onClick={navigate}
        >
          Contact
        </Link>
        <Link
          to="/projects"
          onClick={navigate}
          className={
            location.pathname === "/projects" ? classes.active : classes.primary
          }
        >
          See my work
        </Link>
      </nav>
    </PageContentContainer>
  );
};

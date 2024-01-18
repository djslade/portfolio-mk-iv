import { useMobileNavView } from "../../contexts";
import classes from "./Header.module.scss";
import { Menu, X } from "react-feather";
import { Link, useLocation } from "react-router-dom";

interface Props {
  scrolling: boolean;
}
export const Header = ({ scrolling }: Props) => {
  const location = useLocation();
  const { mobileNavView, setMobileNavView } = useMobileNavView();
  const handleNavigate = () => {
    setMobileNavView(false);
  };

  return (
    <header
      className={`${classes.header} ${
        scrolling ? classes.scrollingHeader : ""
      }`}
    >
      <Link to="/" className={classes.logoButton} onClick={handleNavigate}>
        <img src="/portfolio-logo.svg" alt="David Slade" />
      </Link>
      <button
        className={classes.mobileMenuButton}
        onClick={() => setMobileNavView(!mobileNavView)}
      >
        {mobileNavView ? <X /> : <Menu />}
      </button>
      <nav className={classes.nav}>
        <Link
          to="/about"
          className={location.pathname === "/about" ? classes.active : ""}
        >
          About
        </Link>
        <Link
          to="/skills"
          className={location.pathname === "/skills" ? classes.active : ""}
        >
          Skills
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? classes.active : ""}
        >
          Contact
        </Link>
        <Link
          to="/projects"
          className={
            location.pathname === "/projects" ? classes.active : classes.primary
          }
        >
          See my work
        </Link>
      </nav>
    </header>
  );
};

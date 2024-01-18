import { Link } from "react-router-dom";
import classes from "./MainButton.module.scss";
import { useMobileNavView } from "../../contexts";

interface Props {
  primary?: boolean;
  link?: boolean;
  routerLink?: boolean;
  text: string;
  onClick?: () => void;
  href?: string;
}
1;
export const MainButton = ({
  primary = false,
  link = false,
  routerLink = false,
  text,
  onClick,
  href,
}: Props) => {
  const { setMobileNavView } = useMobileNavView();

  const handleLinkClick = () => {
    setMobileNavView(false);
  };

  if (link === true) {
    return (
      <a
        target="_blank"
        href={href}
        className={primary === true ? classes.primary : classes.secondary}
      >
        {text}
      </a>
    );
  }

  if (routerLink === true) {
    return (
      <Link
        to={href ? href : ""}
        onClick={handleLinkClick}
        className={primary === true ? classes.primary : classes.secondary}
      >
        {text}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={primary === true ? classes.primary : classes.secondary}
    >
      {text}
    </button>
  );
};

import classes from "./MainButton.module.scss";

interface Props {
  primary?: boolean;
  link?: boolean;
  text: string;
  onClick?: () => void;
  href?: string;
}
1;
export const MainButton = ({
  primary = false,
  link = false,
  text,
  onClick,
  href,
}: Props) => {
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
  return (
    <button
      onClick={onClick}
      className={primary === true ? classes.primary : classes.secondary}
    >
      {text}
    </button>
  );
};

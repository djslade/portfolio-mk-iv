import classes from "./MainButton.module.scss";

interface Props {
  primary?: boolean;
  text: string;
  onClick: () => void;
}
1;
export const MainButton = ({ primary = false, text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={primary === true ? classes.primary : classes.secondary}
    >
      {text}
    </button>
  );
};

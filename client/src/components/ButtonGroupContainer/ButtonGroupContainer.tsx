import classes from "./ButtonGroupContainer.module.scss";

interface Props {
  children: React.ReactNode;
}

export const ButtonGroupContainer = ({ children }: Props) => {
  return <div className={classes.buttonGroupContainer}>{children}</div>;
};

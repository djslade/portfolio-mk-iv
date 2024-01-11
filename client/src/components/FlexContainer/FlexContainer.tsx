import classes from "./FlexContainer.module.scss";

interface Props {
  children: React.ReactNode;
}

export const FlexContainer = ({ children }: Props) => {
  return <div className={classes.flexContainer}>{children}</div>;
};

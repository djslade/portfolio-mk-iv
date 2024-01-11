import classes from "./PageHeading.module.scss";

interface Props {
  text: string;
}

export const PageHeading = ({ text }: Props) => {
  return <h2 className={classes.pageHeading}>{text}</h2>;
};

import React from "react";
import classes from "./PageTextSection.module.scss";

interface Props {
  children: React.ReactNode;
}

export const PageTextSection = ({ children }: Props) => {
  return <div className={classes.pageTextSection}>{children}</div>;
};

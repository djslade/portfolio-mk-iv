import React from "react";
import classes from "./AppContainer.module.scss";

interface Props {
  children: React.ReactNode;
}

export const AppContainer = ({ children }: Props) => {
  return <div className={classes.app}>{children}</div>;
};

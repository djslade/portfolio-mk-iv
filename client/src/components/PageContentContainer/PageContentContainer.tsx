import { motion } from "framer-motion";
import classes from "./PageContentContainer.module.scss";

interface Props {
  children: React.ReactNode;
}

export const PageContentContainer = ({ children }: Props) => {
  return (
    <motion.div className={classes.pageContentContainer}>{children}</motion.div>
  );
};

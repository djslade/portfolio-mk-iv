import { motion } from "framer-motion";
import classes from "./PageContentContainer.module.scss";

interface Props {
  children: React.ReactNode;
}

export const PageContentContainer = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      className={classes.pageContentContainer}
    >
      {children}
    </motion.div>
  );
};

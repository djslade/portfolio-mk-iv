import { PageHeading, PageParagraphText } from "..";
import classes from "./PageText.module.scss";

interface Props {
  headingText: string;
  paragraphText: string[];
}

export const PageText = ({ headingText, paragraphText }: Props) => {
  return (
    <div className={classes.pageTextContainer}>
      <PageHeading text={headingText} />
      <PageParagraphText text={paragraphText} />
    </div>
  );
};

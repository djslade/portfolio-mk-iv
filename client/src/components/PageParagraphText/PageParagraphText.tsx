import classes from "./PageParagraphText.module.scss";

interface Props {
  text: string[];
}

export const PageParagraphText = ({ text }: Props) => {
  return (
    <div className={classes.paragraphTextContainer}>
      {text.map((p, index) => (
        <p key={`page text p ${index}`}>{p}</p>
      ))}
    </div>
  );
};

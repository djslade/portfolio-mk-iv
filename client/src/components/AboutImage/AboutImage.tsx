import classes from "./AboutImage.module.scss";

export const AboutImage = () => {
  return (
    <div className={classes.imageContainer}>
      <img src="/about-me-desktop.jpg" alt="David Slade" />
    </div>
  );
};

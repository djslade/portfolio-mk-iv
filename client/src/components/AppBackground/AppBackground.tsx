import classes from "./AppBackground.module.scss";

const starCount: number = 5;

export const AppBackground = () => {
  return (
    <div className={classes.stars}>
      {Array(starCount)
        .fill(0)
        .map((_, index) => (
          <div key={`background-star-${index}`} className={classes.star} />
        ))}
    </div>
  );
};

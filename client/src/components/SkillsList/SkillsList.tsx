import classes from "./SkillsList.module.scss";

export const SkillsList = () => {
  return (
    <div className={classes.skillsListContainer}>
      <ul className={classes.skillsList}>
        <li>Typescript</li>
        <li>React</li>
        <li>Python</li>
        <li>Tailwind</li>
        <li>Sass</li>
        <li>Nextjs</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>REST APIs</li>
        <li>AWS</li>
        <li>Figma</li>
        <li>Firebase</li>
      </ul>
    </div>
  );
};

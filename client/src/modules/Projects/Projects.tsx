import {
  ButtonGroupContainer,
  FlexContainer,
  MainButton,
  PageContentContainer,
  PageText,
  PageTextSection,
} from "../../components";
import classes from "./Projects.module.scss";

export const Projects = () => {
  return (
    <PageContentContainer>
      <div className={classes.projectsOuterContainer}>
        <FlexContainer>
          <div className={classes.projectsTextSection}>
            <PageTextSection>
              <PageText
                headingText="Totalwash"
                paragraphText={[
                  "A full stack ecommerce website for a company that sells bathroom furniture. It was built using Nextjs 13, Tailwind, Express and MongoDB, with Stripe's API integrated to manage customer payments. I also use AWS S3 and Cloudfront to host and deliver assets.",
                ]}
              />
              <ButtonGroupContainer>
                <MainButton
                  onClick={() => console.log("boop")}
                  text="Github repo"
                />
                <MainButton
                  primary
                  onClick={() => console.log("boop")}
                  text="Live demo"
                />
              </ButtonGroupContainer>
            </PageTextSection>
          </div>

          <div className={classes.navyBlueBackground}>
            <img src="/projects-laptop-totalwash.svg" />
          </div>
        </FlexContainer>
        <FlexContainer>
          <div className={classes.goldBackground}>
            <img src="/projects-laptop-chonthong.svg" />
          </div>
          <div className={classes.projectsTextSection}>
            <PageTextSection>
              <PageText
                headingText="Chon Thong Thai Ravintola"
                paragraphText={[
                  "Inspired by the websites of restuarants I visited in the UK, I decided to redesign a local Thai restaurant's website using React and Sass. Assets are hosted and delivered via AWS to enhance the user experience.",
                ]}
              />
              <ButtonGroupContainer>
                <MainButton
                  onClick={() => console.log("boop")}
                  text="Github repo"
                />
                <MainButton
                  primary
                  onClick={() => console.log("boop")}
                  text="Live demo"
                />
              </ButtonGroupContainer>
            </PageTextSection>
          </div>
        </FlexContainer>
        <FlexContainer>
          <div className={classes.projectsTextSection}>
            <PageTextSection>
              <PageText
                headingText="Snapshot"
                paragraphText={[
                  "This is a social media app built on React, Tailwind and Firebase. A mix between Twitter and Instagram, users can post photos, customise their accounts, follow other users and create photo albums.",
                ]}
              />
              <ButtonGroupContainer>
                <MainButton
                  onClick={() => console.log("boop")}
                  text="Github repo"
                />
                <MainButton
                  primary
                  onClick={() => console.log("boop")}
                  text="Live demo"
                />
              </ButtonGroupContainer>
            </PageTextSection>
          </div>

          <div className={classes.darkBlueBackground}>
            <img src="/projects-laptop-snapshot.svg" />
          </div>
        </FlexContainer>
      </div>
    </PageContentContainer>
  );
};

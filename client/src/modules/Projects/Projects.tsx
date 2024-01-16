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
              <img src="/totalwash-resized.jpg" />

              <PageText
                headingText="Totalwash"
                paragraphText={[
                  "A full stack ecommerce website for a company that sells bathroom furniture. It was built using Nextjs 13, Tailwind, Express and MongoDB, with Stripe's API integrated to manage customer payments. I also use AWS S3 and Cloudfront to host and deliver assets.",
                ]}
              />
              <ButtonGroupContainer>
                <MainButton
                  link
                  href="https://github.com/Fenroe/totalwash"
                  text="Github repo"
                />
                <MainButton
                  link
                  href="https://totalwash.vercel.app/"
                  primary
                  text="Live demo"
                />
              </ButtonGroupContainer>
            </PageTextSection>
          </div>

          <div className={classes.navyBlueBackground}>
            <img src="/totalwash-resized.jpg" />
          </div>
        </FlexContainer>
        <FlexContainer>
          <div className={classes.goldBackground}>
            <img src="/chonthong-resized.jpg" />
          </div>
          <div className={classes.projectsTextSection}>
            <PageTextSection>
              <img src="/chonthong-resized.jpg" />
              <PageText
                headingText="Chon Thong Thai Ravintola"
                paragraphText={[
                  "Inspired by the websites of restuarants I visited in the UK, I decided to redesign a local Thai restaurant's website using React and Sass. Assets are hosted and delivered via AWS to enhance the user experience.",
                ]}
              />
              <ButtonGroupContainer>
                <MainButton
                  link
                  href="https://github.com/Fenroe/chon-thong-restuarant"
                  text="Github repo"
                />
                <MainButton
                  primary
                  link
                  href="https://chonthongthai.netlify.app/"
                  text="Live demo"
                />
              </ButtonGroupContainer>
            </PageTextSection>
          </div>
        </FlexContainer>
        <FlexContainer>
          <div className={classes.projectsTextSection}>
            <PageTextSection>
              <img src="/snapshot-resized.jpg" />
              <PageText
                headingText="Snapshot"
                paragraphText={[
                  "This is a social media app built on React, Tailwind and Firebase. A mix between Twitter and Instagram, users can post photos, customise their accounts, follow other users and create photo albums.",
                ]}
              />
              <ButtonGroupContainer>
                <MainButton
                  link
                  href="https://github.com/Fenroe/Snapshot"
                  text="Github repo"
                />
                <MainButton
                  link
                  href="https://react-snapshot.netlify.app/"
                  primary
                  text="Live demo"
                />
              </ButtonGroupContainer>
            </PageTextSection>
          </div>

          <div className={classes.darkBlueBackground}>
            <img src="/snapshot-resized.jpg" />
          </div>
        </FlexContainer>
      </div>
    </PageContentContainer>
  );
};

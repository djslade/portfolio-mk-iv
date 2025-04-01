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
          <div className={classes.goldBackground}>
            <img src="/molly-resized.jpg" />
          </div>
          <div className={classes.projectsTextSection}>
            <PageTextSection>
              <img src="/molly-resized.jpg" />
              <PageText
                headingText="Molly"
                paragraphText={[
                  "Molly is a crowdsourced recipe catalogue that removes all the clutter from recipe blog sites. Combining microservices built in Nestjs, Go and Python, Molly leverages a powerful distributed backend system for blazingly fast performance.",
                ]}
              />
              <ButtonGroupContainer>
                <MainButton
                  link
                  href="https://github.com/djslade/molly"
                  text="Github repo"
                />
                <MainButton
                  primary
                  link
                  href="https://molly.davidslade.dev/"
                  text="Live demo"
                />
              </ButtonGroupContainer>
            </PageTextSection>
          </div>
        </FlexContainer>
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
                  href="https://github.com/djslade/totalwash"
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
          <div className={classes.darkBlueBackground}>
            <img src="/salinstudio-resized.jpg" />
          </div>
          <div className={classes.projectsTextSection}>
            <PageTextSection>
              <img src="/salinstudio-resized.jpg" />

              <PageText
                headingText="Salin Studio"
                paragraphText={[
                  "This is a portfolio site I was commissioned to build and host. The website is powered by Nextjs and Tailwind, which will allow me to expand its features later on as needed by the client. It is hosted through an Nginx configuration on a VPS via a Docker container.",
                ]}
              />
              <ButtonGroupContainer>
                <MainButton
                  link
                  href="https://github.com/djslade/salinstudio"
                  text="Github repo"
                />
                <MainButton
                  link
                  href="https://miiasalin.com"
                  primary
                  text="Live demo"
                />
              </ButtonGroupContainer>
            </PageTextSection>
          </div>
        </FlexContainer>
        <FlexContainer>
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
                  href="https://github.com/djslade/chon-thong-restuarant"
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
          <div className={classes.goldBackground}>
            <img src="/chonthong-resized.jpg" />
          </div>
        </FlexContainer>
      </div>
    </PageContentContainer>
  );
};

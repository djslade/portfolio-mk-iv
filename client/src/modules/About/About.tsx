import {
  AboutImage,
  AboutText,
  FlexContainer,
  PageContentContainer,
} from "../../components";

export const About = () => {
  return (
    <PageContentContainer>
      <FlexContainer>
        <AboutText />
        <AboutImage />
      </FlexContainer>
    </PageContentContainer>
  );
};

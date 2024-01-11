import {
  FlexContainer,
  PageContentContainer,
  SkillsList,
  SkillsText,
} from "../../components";

export const Skills = () => {
  return (
    <PageContentContainer>
      <FlexContainer>
        <SkillsText />
        <SkillsList />
      </FlexContainer>
    </PageContentContainer>
  );
};

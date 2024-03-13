import {
  ButtonGroupContainer,
  MainButton,
  PageContentContainer,
  PageText,
  PageTextSection,
} from "../../components";

const text: string[] = [
  "Sorry, this page doesn't exist. If you think this is a mistake then please send me a message and let me know.",
];

export const NotFound = () => {
  return (
    <PageContentContainer>
      <PageTextSection>
        <PageText headingText="Page not found" paragraphText={text} />
        <ButtonGroupContainer>
          <MainButton routerLink href="/contact" text="Get in touch" />
          <MainButton routerLink href="/" primary text="Return home" />
        </ButtonGroupContainer>
      </PageTextSection>
    </PageContentContainer>
  );
};

import {
  FlexContainer,
  MainButton,
  PageContentContainer,
  PageText,
} from "../../components";
import classes from "./Contact.module.scss";

export const Contact = () => {
  return (
    <PageContentContainer>
      <FlexContainer>
        <div className={classes.contactTextSection}>
          <PageText
            headingText="Get in touch"
            paragraphText={[
              "I'm currently searching for new opportunities. If you would like to connect with me then please send me a message. I'd love to hear from you!",
            ]}
          />
        </div>
        <div className={classes.contactFormSection}>
          <form className={classes.form}>
            <div className={classes.formControl}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className={classes.formInput}
                placeholder="Name"
              />
            </div>
            <div className={classes.formControl}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={classes.formInput}
                placeholder="Email"
              />
            </div>
            <div className={classes.formControl}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className={classes.formInput}
                placeholder="Message"
              />
            </div>
            <MainButton
              primary
              text="Send"
              onClick={() => console.log("boop")}
            />
          </form>
        </div>
      </FlexContainer>
    </PageContentContainer>
  );
};

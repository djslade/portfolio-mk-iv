import { useState } from "react";
import {
  ButtonGroupContainer,
  FlexContainer,
  MainButton,
  PageContentContainer,
  PageText,
  PageTextSection,
} from "../../components";
import classes from "./Contact.module.scss";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Formik, Field, Form } from "formik";

export const Contact = () => {
  const [sendingEmail, setSendingEmail] = useState<boolean>(false);

  const [emailSentSuccessfully, setEmailSendSuccessfully] =
    useState<boolean>(false);

  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("This field is required"),
    message: Yup.string().required("This field is required"),
  });

  const sendEmail = (name: string, email: string, message: string) => {
    if (sendingEmail) return;
    const servieID = "default_service";
    const templateID = "template_default";
    const publicKey = "hOmldMdYbmRbaB9wB";
    setSendingEmail(true);
    const templateParams = {
      name,
      email,
      message,
    };
    emailjs
      .send(servieID, templateID, templateParams, publicKey)
      .then(
        () => {
          setSendingEmail(false);
          setEmailSendSuccessfully(true);
        },
        () => {
          setSendingEmail(false);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  };
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
          {emailSentSuccessfully ? (
            <PageTextSection>
              <PageText
                headingText="Message sent"
                paragraphText={[
                  "Thank you for emailing me! I will get back to you as soon as possible.",
                ]}
              />
              <ButtonGroupContainer>
                <MainButton
                  primary
                  text="Send again"
                  onClick={() => setEmailSendSuccessfully(false)}
                />
              </ButtonGroupContainer>
            </PageTextSection>
          ) : (
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              validationSchema={ContactSchema}
              onSubmit={(values) => {
                sendEmail(values.name, values.email, values.message);
              }}
            >
              {({ errors, touched }) => (
                <Form className={classes.form}>
                  <div className={classes.formControl}>
                    <label htmlFor="name">Name</label>
                    <Field
                      as="input"
                      id="name"
                      name="name"
                      type="text"
                      className={classes.formInput}
                      placeholder="Name"
                    />
                    {errors.name && touched.name && (
                      <span className={classes.errorMessage}>
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className={classes.formControl}>
                    <label htmlFor="email">Email</label>
                    <Field
                      as="input"
                      id="email"
                      name="email"
                      type="email"
                      className={classes.formInput}
                      placeholder="Email"
                    />
                    {errors.email && touched.email && (
                      <span className={classes.errorMessage}>
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className={classes.formControl}>
                    <label htmlFor="message">Message</label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={3}
                      className={classes.formInput}
                      placeholder="Message"
                    />
                    {errors.message && touched.message && (
                      <span className={classes.errorMessage}>
                        {errors.message}
                      </span>
                    )}
                  </div>
                  <MainButton
                    primary
                    text={sendingEmail ? "Sending..." : "Send"}
                  />
                </Form>
              )}
            </Formik>
          )}
        </div>
      </FlexContainer>
    </PageContentContainer>
  );
};

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import styles from "./ContactForm.module.css";

const FeedBackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too Long")
    .required("required"),
  number: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too Long")
    .required("required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ handleSubmit }) => {
  const userNameId = useId();
  const userNumberId = useId();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedBackSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor={userNameId}>
          Name
        </label>
        <Field
          className={styles.input}
          key={userNameId}
          name="name"
          type="text"
        />
        <ErrorMessage className={styles.error} name="name" component="span" />
        <label className={styles.label} htmlFor={userNumberId}>
          Number
        </label>
        <Field
          className={styles.input}
          key={userNumberId}
          name="number"
          type="tel"
        />
        <ErrorMessage className={styles.error} name="number" component="span" />
        <button className={styles.button} type="submit">
          add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

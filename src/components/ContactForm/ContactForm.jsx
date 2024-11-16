import { Formik, Form, Field, ErrorMessage } from "formik";
import { AddContactSchema } from "../../validation-schema";
import { useDispatch } from "react-redux";

import styles from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";


const ContactForm = () => {
  const INITIAL_VALUES = { name: "", number: "" };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contact = {
      name: values.name.trim(),
      number: values.number.trim(),
    };
    dispatch(addContact(contact));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={AddContactSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.label_title}>Name</span>

          <Field
            className={styles.input}
            type="text"
            name="name"
            placeholder="John Smith"
          ></Field>

          <ErrorMessage
            className={styles.message}
            name="name"
            component="span"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.label_title}>Number</span>

          <Field
            className={styles.input}
            type="text"
            name="number"
            placeholder="000-00-00"
          ></Field>

          <ErrorMessage
            className={styles.message}
            name="number"
            component="span"
          />
        </label>

        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;

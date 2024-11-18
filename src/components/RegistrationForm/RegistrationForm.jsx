import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import { RegisterUserSchema } from "../../validation-schema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  const INITIAL_VALUES = { name: "", email: "", password: "" };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const formData = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };
    dispatch(registerUser(formData));
    console.log(formData);

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegisterUserSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.label_title}>Name</span>

          <Field
            className={styles.input}
            type="text"
            name="name"
            placeholder="john_smith"
          />

          <ErrorMessage
            className={styles.message}
            name="name"
            component="span"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.label_title}>Email</span>

          <Field
            className={styles.input}
            type="text"
            name="email"
            placeholder="john_smith@mail.com"
          />

          <ErrorMessage
            className={styles.message}
            name="email"
            component="span"
          />
        </label>

        <label className={styles.label}>
          <span className={styles.label_title}>Password</span>

          <Field
            className={styles.input}
            type="text"
            name="password"
            placeholder="Enter your password"
          />

          <ErrorMessage
            className={styles.message}
            name="password"
            component="span"
          />
        </label>

        <button className={styles.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;

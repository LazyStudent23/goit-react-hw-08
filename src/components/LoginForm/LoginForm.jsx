import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";
import { LoginUserSchema } from "../../validation-schema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from './LoginForm.module.css'


const LoginForm = () => {
  const INITIAL_VALUES = { email: "", password: "" };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const formData = {
      email: values.email.trim(),
      password: values.password.trim(),
    };
    dispatch(loginUser(formData));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginUserSchema}
    >
      <Form className={styles.form}>
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
            placeholder = "Enter your password"
          />

          <ErrorMessage
            className={styles.message}
            name="password"
            component="span"
          />
        </label>

        <button className={styles.btn} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

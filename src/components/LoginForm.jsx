import { Field, Formik, Form, ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../redux/auth/operations";

import css from "../components/css/RegistrationForm.module.css";

import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email!").required("Required!"),
    password: Yup.string()
      .required("Required!")
      .min(8, "Password must be at least 8 characters!")
      .max(50, "Password must be at most 50 characters!"),
  });

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
      >
        <Form className={css.form}>
          <div  className={css.group}>
            <label htmlFor="email" className={css.label}>Email</label>
            <div>
              <Field
                name="email"
                id="email"
                type="email"
                placeholder="Type your email"
                className={css.input}
              />
            </div>
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>
          <div >
            <label htmlFor="password" className={css.label}>
              Password
            </label>
            <div>
              <Field
                name="password"
                id="password"
                type="password"
                placeholder="Type your password"
                className={css.input}
              />
            </div>
            <ErrorMessage  className={css.error} name="password" component="span" />
          </div>
          <button className={css.button} type="submit">Login</button>
        </Form>
      </Formik>
      <p>
        {`Don't have an account?`} <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginForm;

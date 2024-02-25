import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    // Handle login logic here
    console.log("Form data submitted:", values);
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="email">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
            {/* <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        /> */}
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
            {/* <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            /> */}
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

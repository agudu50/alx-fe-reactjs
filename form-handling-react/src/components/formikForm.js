import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Yup validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),

    email: Yup.string().required("Email is required").email("Invalid email format"),

    password: Yup.string().required("Password is required"),

    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      <Form style={{ maxWidth: "400px", margin: "auto" }}>
        <h2>User Registration Form (Formik)</h2>

        <div>
          <label>Username:</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="p" style={{ color: "red" }} />
        </div>

        <div>
          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />
        </div>

        <div>
          <label>Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="p" style={{ color: "red" }} />
        </div>

        <div>
          <label>Confirm Password:</label>
          <Field type="password" name="confirmPassword" />
          <ErrorMessage
            name="confirmPassword"
            component="p"
            style={{ color: "red" }}
          />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;

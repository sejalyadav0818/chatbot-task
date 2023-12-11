import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/esm/Button";
import { ToastContainer, toast } from "react-toastify";
import * as formik from "formik";
import { useNavigate } from "react-router-dom";
import ValidationSchema from "../Validation/VadlidationSchema";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const LoginForm = ({ onUserSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const { Formik } = formik;

  const handleFormSubmit = async (values, { setSubmitting }) => {
    console.log(values, "validate");
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: values.email,
        password: values.password,
      });
      console.log(response.data);
      if (response.status === 200) {
        toast("Login Successful!");
        const token = response.data.data.token;
        const decodedToken = jwtDecode(token);
        console.log(decodedToken, token);
        const { firstname, lastname } = decodedToken;
        console.log(firstname, lastname);
        onUserSubmit(firstname, lastname);
        console.log(firstname, lastname);

        navigate("/chat");
      } else {
        toast.error("Login Failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An unexpected error occurred during login");
    }

    setEmail("");
    setPassword("");
    setSubmitting(false);
  };

  return (
    <>
      <ToastContainer />
      <h1 className="text-center mt-4">Login Form</h1>
      <Stack gap={2} className="mx-5 my-5">
        <Formik
          validationSchema={ValidationSchema}
          onSubmit={handleFormSubmit}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-3 mt-10">
                    <Form.Label className="bold-text">Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={(e) => {
                        handleChange(e);
                        setEmail(e.target.value);
                      }}
                      value={values.email}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3 mt-10">
                    <Form.Label className="bold-text">Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      onChange={(e) => {
                        handleChange(e);
                        setPassword(e.target.value);
                      }}
                      value={values.password}
                      isValid={touched.password && !errors.password}
                      isInvalid={touched.password && !!errors.password}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="dark" type="submit" className="text-center">
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Stack>
    </>
  );
};

export default LoginForm;

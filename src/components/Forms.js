import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  ModalFooter
} from "reactstrap";
import { navigate } from "gatsby-link";
import * as Yup from "yup";
import { Formik } from "formik";
import UploadFiles from "./UploadFiles";

const Forms = () => {
  const phoneRegExp = /^[+0-9]*$/;

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required!"),
    lastName: Yup.string().required("Last name is required!"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    phone: Yup.string()
      .required("Phone number required")
      .matches(phoneRegExp, "Please enter a valid phone number")
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    files: null
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "application",
            ...values
          })
        })
          .then(() => {
            navigate("/thanks");
            actions.resetForm();
          })
          .catch((error) => alert(error))
          .finally(() => actions.setSubmitting(false));
      }}
      validationSchema={validationSchema}
      render={({
        values,
        handleSubmit,
        setFieldValue,
        handleChange,
        handleBlur,
        errors,
        touched
      }) => {
        return (
          <Form
            name="application"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thanks"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="application" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Firstname</Label>
                  <Input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="text-danger">
                      <i className="fas fa-times mr-1" />
                      {errors.firstName}
                    </div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Last name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="text-danger">
                      <i className="fas fa-times mr-1" />
                      {errors.lastName}
                    </div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <div className="text-danger">
                      <i className="fas fa-times mr-1" />
                      {errors.email}
                    </div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>PhoneNumber</Label>
                  <Input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={values.phone}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone ? (
                    <div className="text-danger">
                      <i className="fas fa-times mr-1" />
                      {errors.phone}
                    </div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Upload CV</Label>
                  <UploadFiles setFieldValue={setFieldValue} />
                </FormGroup>
              </Col>
            </Row>
            <ModalFooter>
              <Button type="submit" color="primary">
                Send
              </Button>
            </ModalFooter>
          </Form>
        );
      }}
    />
  );
};
export default Forms;

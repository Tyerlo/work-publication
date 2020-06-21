import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  FormText,
  Input,
  Row,
  Col,
  ModalFooter
} from "reactstrap";
import { navigate } from "gatsby-link";
import * as Yup from "yup";
import { useFormik, Field } from "formik";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
const initialValues = {
  firstName: "",
  lastName: "",
  email: ""
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required!")
});
const Forms = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema
  });

  const [state, setState] = useState({});

  const handleSubmit = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "application-form",
        ...state
      })
    })
      .then(() => navigate("action"))
      .catch((error) => alert(error));
  };
  return (
    <Form
      name="application-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thanks"
      onSubmit={formik.handleSubmit}
    >
      {/* <Field type="hidden" name="application-form" />
      <Field type="hidden" name="bot-field" /> */}
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Firstname</Label>
            <Input
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
            />
            {formik.errors.firstName && formik.touched.firstName ? (
              <div className="text-danger">
                <i className="fas fa-times mr-1" />
                {formik.errors.firstName}
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
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
            />
            {formik.errors.lastName && formik.touched.lastName ? (
              <div className="text-danger">
                <i className="fas fa-times mr-1" />
                {formik.errors.lastName}
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
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-danger">
                <i className="fas fa-times mr-1" />
                {formik.errors.email}
              </div>
            ) : null}
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
};
export default Forms;

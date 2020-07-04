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
import DropZone from "./DropZone";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  textarea: ""
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required!"),
  textarea: Yup.string().max(1000, "Must be max 1000 characters")
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

  const handleAttachement = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
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
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="file-upload" />
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
        <Col md={12}>
          <FormGroup>
            <Label>Upload CV</Label>
            <DropZone />
          </FormGroup>
        </Col>
        <Col md={12}>
          <Label>Personal letter(Optional)</Label>
          <Input
            maxLength="1000"
            type="textarea"
            name="textarea"
            onChange={formik.handleChange}
            value={formik.values.textarea}
            onBlur={formik.handleBlur}
          />
          {formik.errors.textarea && formik.touched.textarea ? (
            <div className="text-danger">
              <i className="fas fa-times mr-1" />
              {formik.errors.textarea}
            </div>
          ) : null}
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

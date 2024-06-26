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
import axios from "axios";
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
      .matches(phoneRegExp, "Please enter a valid phone number"),
    files: Yup.string().required("Files can't be empty").nullable(true)
  });

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
        axios
          .post("/.netflify/functions/ses-send-email", {
            values
          })
          .then((result) => {
            let data = JSON.parse(result.config.data);
            console.log(data);
            return data;
          })
          // .then(() => {
          //   navigate("/thanks");
          //   actions.resetForm();
          // })
          .catch((error) => {
            console.log(error);
            navigate("/error");
          });
      }}
      validationSchema={validationSchema}
    >
      {(props) => (
        <Form
          name="application"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={props.handleSubmit}
        >
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Firstname</Label>
                <Input
                  type="text"
                  name="firstName"
                  onChange={props.handleChange}
                  value={props.values.firstName}
                  onBlur={props.handleBlur}
                />
                {props.errors.firstName && props.touched.firstName ? (
                  <div className="text-danger">
                    <i className="fas fa-times mr-1" />
                    {props.errors.firstName}
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
                  onChange={props.handleChange}
                  value={props.values.lastName}
                  onBlur={props.handleBlur}
                />
                {props.errors.lastName && props.touched.lastName ? (
                  <div className="text-danger">
                    <i className="fas fa-times mr-1" />
                    {props.errors.lastName}
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
                  onChange={props.handleChange}
                  value={props.values.email}
                  onBlur={props.handleBlur}
                />
                {props.errors.email && props.touched.email ? (
                  <div className="text-danger">
                    <i className="fas fa-times mr-1" />
                    {props.errors.email}
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
                  onChange={props.handleChange}
                  value={props.values.phone}
                  onBlur={props.handleBlur}
                />
                {props.errors.phone && props.touched.phone ? (
                  <div className="text-danger">
                    <i className="fas fa-times mr-1" />
                    {props.errors.phone}
                  </div>
                ) : null}
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label>Upload CV</Label>
                <UploadFiles
                  setFieldValue={props.setFieldValue}
                  files={props.values.files}
                />
                {props.errors.files && props.touched.files ? (
                  <div className="text-danger">
                    <i className="fas fa-times mr-1" />
                    {props.errors.files}
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
      )}
    </Formik>
  );
};
export default Forms;

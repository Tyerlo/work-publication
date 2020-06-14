import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  FormText,
  Input,
  Row,
  Col
} from "reactstrap";

const Forms = () => {
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label>Firstname</Label>
            <Input type="text" name="firstName" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Last name</Label>
            <Input type="text" name="lastName" />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
export default Forms;

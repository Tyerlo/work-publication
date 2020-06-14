import React, { Fragment } from "react";
import Layout from "../components/layout";
import { Button } from "reactstrap";
import Modalen from "../components/Modal";
const jobdescription = ({ location }) => {
  return (
    <Layout>
      <Fragment>
        <h1>{location.state.title}</h1>
        <p>{location.state.description}</p>
        <Modalen
          title={location.state.title}
          children={location.state.description}
        />
      </Fragment>
    </Layout>
  );
};

export default jobdescription;

import React, { Fragment } from "react";
import Layout from "./layout";
import Modalen from "./Modal";
const Description = ({ location }) => {
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

export default Description;

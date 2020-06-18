import React, { Fragment } from "react";
import Layout from "../components/layout";
import ApplyJob from "../components/ApplyJob";
const Description = ({ location }) => {
  let title = location.state ? location.state.title : null;
  let description = location.state ? location.state.description : null;
  return (
    <Layout>
      <Fragment>
        <h1>{title}</h1>
        <p>{description}</p>
        <ApplyJob title={title} children={description} />
      </Fragment>
    </Layout>
  );
};

export default Description;

import React from "react";
import { Jumbotron, Button } from "reactstrap";

const JumboTron = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">
          Do you want to expand your team and display your work offerings?
        </h1>
        <p className="lead">Find a job that suits you!</p>
        <hr className="my-2" />

        <p className="lead">
          <Button color="primary">Available jobs</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumboTron;

import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "gatsby";

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
          <Link to="/jobs">
            <Button color="primary">Available jobs</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumboTron;

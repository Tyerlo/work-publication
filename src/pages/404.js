import React from "react";
import { Link } from "gatsby";

const notFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go to Home</Link>
      </p>
    </div>
  );
};

export default notFound;

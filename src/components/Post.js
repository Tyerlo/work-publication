import React from "react";
import { Link } from "gatsby";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Button
} from "reactstrap";

const Post = ({ title, author, date, description, path }) => {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src="/assets/256x186.svg"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{description}</CardSubtitle>
        <Link to={path ? path : ""}>
          <Button color="success">Read more</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default Post;

import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from "reactstrap";
const CardColumn = () => {
  return (
    <div>
      <CardColumns>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardColumns>
    </div>
  );
};
export default CardColumn;

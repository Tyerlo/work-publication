import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";
import { graphql, StaticQuery } from "gatsby";

const CardDecks = () => {
  return (
    <StaticQuery
      query={graphql`
        query JobsQuery {
          dataJson {
            jobs {
              title
              description
            }
          }
        }
      `}
      render={(data) => (
        <div>
          <h1 className="text-center">Available Jobs</h1>
          <CardDeck>
            {data.dataJson.jobs.map((result, index) => {
              return (
                <Card key={"card-" + index}>
                  <CardImg
                    top
                    width="100%"
                    src="/assets/256x186.svg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle></CardTitle>
                    <CardSubtitle>{result.title}</CardSubtitle>
                    <CardText>{result.description}</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              );
            })}
          </CardDeck>
        </div>
      )}
    />
  );
};
export default CardDecks;

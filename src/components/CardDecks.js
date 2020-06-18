import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";
import { Link, graphql, StaticQuery } from "gatsby";

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
                    <CardTitle>{result.title}</CardTitle>
                    <CardSubtitle></CardSubtitle>
                    <Link to={`/description/${result.title}`}>
                      <Button color="success">Apply</Button>
                    </Link>
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

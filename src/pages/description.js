import React from "react";
import Layout from "../components/Layout";
import ApplyJob from "../components/ApplyJob";
import { graphql, StaticQuery } from "gatsby";
const Description = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query descrQuery {
          dataJson {
            jobs {
              title
              description
            }
          }
        }
      `}
      render={(data) => (
        <Layout>
          {data.dataJson.jobs.map((result, index) => {
            if (props["*"] === result.title) {
              return (
                <div key={"header-" + index}>
                  <h1>{result.title}</h1>
                  <p>{result.description}</p>
                  <ApplyJob
                    title={result.title}
                    description={result.description}
                  />
                </div>
              );
            }
          })}
        </Layout>
      )}
    />
  );
};

export default Description;

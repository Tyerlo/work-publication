import React from "react";
import { graphql, StaticQuery } from "gatsby";
const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          dataJson {
            page {
              author
            }
          }
        }
      `}
      render={(data) => (
        <footer>
          <p>Created by {data.dataJson.page.author} © 2020</p>
        </footer>
      )}
    />
  );
};
export default Footer;

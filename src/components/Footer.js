import React from "react";
import { Navbar, Nav } from "reactstrap";
import { graphql, StaticQuery } from "gatsby";
const Footer = () => {
  return (
    <Navbar className="fixed-bottom">
      <Nav navbar>Created by Thomas Borgstrom © 2020</Nav>
    </Navbar>
    // {data.dataJson.page.author}
    // <StaticQuery
    //   query={graphql`
    //     query FooterQuery {
    //       dataJson {
    //         page {
    //           author
    //         }
    //       }
    //     }
    //   `}
    //   render={(data) => (

    //   )}
    // />
  );
};
export default Footer;

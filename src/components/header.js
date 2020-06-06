import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import { Link, graphql, StaticQuery } from "gatsby";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          dataJson {
            page {
              title
            }
          }
        }
      `}
      render={(data) => (
        <header>
          <Navbar color="light" light expand="md">
            <Link to="/">
              <Button color="light">{data.dataJson.page.title}</Button>
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {/* <NavItem>
            <Link to="/">
              <Button color="light">Home</Button>
            </Link>
          </NavItem> */}
                <NavItem>
                  <Link to="/about">
                    <Button color="light">About</Button>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      )}
    />
  );
};
export default Header;

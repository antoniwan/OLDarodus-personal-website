import React from "react";
import styled from "react-emotion";
import { Link } from "@reach/router";

const StyledMenu = styled("div")`
  .headroom {
    background: white;
    nav {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      max-width: 850px;
      margin: 0 auto;
      padding: 15px 25px;
    }
    a {
      margin-bottom: -4px;
      text-decoration: none;
      margin-left: 1rem;
      &:first-child {
        margin-left: 0;
      }
      &.active {
        text-decoration: underline wavy;
      }
      &.hidden {
        opacity: 0;
      }
    }
  }
`;

const Navigation = () => (
  <StyledMenu>
    <nav>
      <Link to="/" exact activeClassName="hidden">
        Home
      </Link>
      <Link to="/tools" activeClassName="active">
        Tools
      </Link>
      <Link to="/contact-me" activeClassName="active">
        Contact
      </Link>
    </nav>
  </StyledMenu>
);

export default Navigation;

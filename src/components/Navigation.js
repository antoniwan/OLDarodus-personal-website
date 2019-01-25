import React from "react";
import styled from "react-emotion";
import { Link } from "@reach/router";

const StyledMenu = styled("nav")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: stretch;

  > * {
    margin: 20px;
    font-size: 0.8rem;
  }

  a {
    text-decoration: none;
    &:first-child {
      margin-left: 0;
    }
    &.active {
      font-weight: bold;
    }
    &.hidden {
      opacity: 0;
    }
  }
`;

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : null;
};

const Navigation = () => (
  <StyledMenu>
    <Link to="/" exact getProps={isActive}>
      Home
    </Link>
    <Link to="/tools" getProps={isActive}>
      I Use
    </Link>
    <Link to="/contact-me" getProps={isActive}>
      Contact Me
    </Link>
  </StyledMenu>
);

export default Navigation;

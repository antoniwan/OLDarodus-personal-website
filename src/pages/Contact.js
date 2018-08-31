import React from "react";
import { Link } from "@reach/router";
import posed from "react-pose";
import styled from "react-emotion";
import { svgBG } from "../utils/misc";

const PosedMain = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50 }
});
const textAnimationProps = {
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
};
const PosedExtraBlock = posed.div({
  enter: {
    x: 0
  },
  exit: { x: "-100%" }
});
const P = posed.p(textAnimationProps);
const H1 = posed.h1(textAnimationProps);

const StyledMain = styled(PosedMain)`
  display: flex;
  flex-direction: column;

  @media(min-width: 850px) {
    height: 100vh;
    flex-direction: row;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    order: 1;
    padding: 2rem;
    max-width: 500px;

    @media(min-width: 850px) {
      padding: 4rem;
      justify-content: center;
      order: 2;
      flex: 0.7;
    }
  }

  .imagery {
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 2;
    background-color: #ffffff;
    background-image: url("${svgBG}");
    border-right: 0.1px solid #eee;
    overflow: hidden;

    @media(min-width: 850px) {
      display: flex;
      order: 1;
      flex: 0.2;
    }
  }

  img {
    max-width: 500px;
    max-height: 500px;
    margin: 0;
    padding: 0;
  }

`;

const Contact = () => {
  return (
    <StyledMain>
      <PosedExtraBlock className="imagery" />

      <div className="content">
        <H1>Lorem!</H1>

        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
          amet leo id ligula commodo efficitur ac quis nunc. Nullam auctor, diam
          eu suscipit consequat, lorem nibh maximus orci, non venenatis ex massa
          sed neque. Nulla laoreet orci ac ante vehicula commodo. Integer
          suscipit justo quis convallis euismod.
        </P>

        <P>
          Praesent semper ac urna quis pellentesque. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </P>

        <P>
          In blandit risus sed nibh auctor, a vulputate eros iaculis. Nunc a
          rhoncus elit, ut tincidunt tortor. Fusce ac placerat magna, vel mollis
          lorem.
        </P>

        <P>Suspendisse potenti.</P>

        <ul id="site-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
          <li>
            <Link to="/contact-me">Contact</Link>
          </li>
        </ul>
      </div>
    </StyledMain>
  );
};

export default Contact;

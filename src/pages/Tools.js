import React from "react";
import posed from "react-pose";
import Helmet from "react-helmet";
import styled from "react-emotion";
import { svgBG } from "../utils/misc";
import Toolbox from "../components/Toolbox";
import Navigation from "../components/Navigation";

const PosedToolbox = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});
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
const H1 = posed.h1(textAnimationProps);

const StyledMain = styled(PosedMain)`
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  @media(min-width: 850px) {
    flex-direction: row;
    padding-top: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    order: 1;
    padding: 2rem;

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

const Tools = () => {
  return (
    <React.Fragment>
      <Helmet
        title="Skills to pay the bills | Antonio Rodriguez"
        meta={[
          {
            name: "description",
            content:
              "These are my tools of the trade. No technology is safe! 😂."
          }
        ]}
      />
      <Navigation />
      <StyledMain>
        <PosedExtraBlock className="imagery" />

        <div className="content">
          <H1>Tools</H1>

          <PosedToolbox>
            <Toolbox />
          </PosedToolbox>
        </div>
      </StyledMain>
    </React.Fragment>
  );
};

export default Tools;

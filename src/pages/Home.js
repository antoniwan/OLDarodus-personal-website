import React from "react";
import { Link } from "@reach/router";
import posed from "react-pose";
import styled, { css } from "react-emotion";
import image1 from "../assets/images/test-1.jpg";
import image2 from "../assets/images/test-2.jpg";
import image3 from "../assets/images/test-3.jpg";
import { svgBG } from "../utils/misc";

const PosedMain = posed.div({
  enter: { staggerChildren: 50 }
});
const textAnimationProps = {
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
};
const imageAnimationProps = {
  enter: {
    x: 0
  },
  exit: {
    x: "-100%"
  }
};
const P = posed.p(textAnimationProps);
const H1 = posed.h1(textAnimationProps);
const IMG = posed.img(imageAnimationProps);

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
    /*justify-content: center;*/
    padding: 2rem;
    max-width: 500px;

    @media(min-width: 850px) {
      padding: 4rem;
      justify-content: center;
      order: 2;
      flex: 0.4;
    }
  }

  .imagery {
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 2;
    background-color: #ffffff;
    background-image: url("${svgBG}");

    @media(min-width: 850px) {
      display: flex;
      order: 1;
      flex: 0.6;
    }
  }

  img {
    max-width: 500px;
    max-height: 500px;
    margin: 0;
    padding: 0;
  }

`;

const Home = () => {
  return (
    <StyledMain>
      <div className="imagery">
        <IMG src={image1} alt="Text 1" />
        <IMG src={image2} alt="Text 2" />
        <IMG src={image3} alt="Text 3" />
      </div>

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
        </ul>
      </div>
    </StyledMain>
  );
};

export default Home;

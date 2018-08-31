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
const P = posed.p(textAnimationProps);
const H1 = posed.h1(textAnimationProps);

const StyledMain = styled(PosedMain)`
  display: flex;
  flex-direction: column;

  @media(min-width: 700px) {
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

    @media(min-width: 700px) {
      padding: 4rem;
      justify-content: center;
      order: 2;
      flex: 0.4;
    }
  }

  .imagery {
    flex: 1;
    order: 2;
    background-color: #ffffff;
    background-image: url("${svgBG}");
    overflow: hidden;

    @media(min-width: 700px) {
      order: 1;
      flex: 0.6;
    }
  }

  .item {
    background: red;
    max-width: 500px;
    max-height: 500px;
    overflow: hidden;
  }

  .image-wrapper img {
    width: 200px;
  }


`;

const Home = () => {
  return (
    <StyledMain>
      <div className="imagery">
        <div className="item item-1">
          <img src={image1} alt="Text 1" />
        </div>
        <div className="item item-2">
          <img src={image2} alt="Text 2" />
        </div>
        <div className="item item-3">
          <img src={image3} alt="Text 3" />
        </div>
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

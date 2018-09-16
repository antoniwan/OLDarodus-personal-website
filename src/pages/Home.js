import React from "react";
import { Link } from "@reach/router";
import posed from "react-pose";
import styled from "react-emotion";
import Helmet from "react-helmet";
import image5 from "../assets/images/m8headshot.jpg";
import { svgBG } from "../utils/misc";

const PosedMain = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50 }
});
// Remember to animate the imagery panel on enter!
const textAnimationProps = {
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
};
const imageAnimationProps = {};
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
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    order: 2;
    background-color: #ffffff;
    background-image: url("${svgBG}");
    border-right: 1px solid var(--color-light_gray);
    overflow: hidden;

    @media(min-width: 850px) {
      display: flex;
      order: 1;
      flex: 0.6;
    }
  }

  img {
    max-width: 300px;
    width: 100%;
    margin: 0;
    padding: 50px 0;
    border-radius: 5px;
    margin: 5px;
  }

`;

/* Add 2 top tweets using the Twitter API */
/* Add 1 Instagram post (dunno if they have an open API) */
/* Have it look like an atom, "my composition as a person" */
const Home = () => {
  return (
    <StyledMain>
      <div className="imagery">
        <IMG src={image5} alt="Text 5" />
      </div>

      <div className="content">
        <Helmet
          title="Antonio Rodriguez"
          meta={[
            {
              name: "description",
              content:
                "Software engineer living in Miami, Florida. Knows what he's doing 60% the time. Will work for food."
            }
          ]}
        />
        <H1>Software Engineer. Manager. Husband. Father.</H1>

        <P>
          My name is Antonio Rodríguez and I lead software development for a{" "}
          <a
            href="https://m8agency.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            marketing agency
          </a>{" "}
          in Miami, Florida. I absolutely enjoy learning and working with{" "}
          <Link to="/tools">web technologies</Link>; we have the best job in the
          world!
        </P>

        <P>
          Away from the screen, I like playing{" "}
          <a
            href="https://www.instagram.com/stories/highlights/17908582195073038/"
            target="_blank"
            rel="noopener noreferrer"
          >
            guitar
          </a>
          , basketball, eating lots of food and spending time with my family.
        </P>

        <P>
          Please do <Link to="/contact-me"> contact </Link> me! I'm open to
          mentoring, code reviews, projects or just casual conversation.
        </P>

        <P>Thanks for visiting!</P>
      </div>
    </StyledMain>
  );
};

export default Home;

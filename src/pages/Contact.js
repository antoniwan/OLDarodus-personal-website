import React from "react";
import posed from "react-pose";
import styled from "react-emotion";
import Helmet from "react-helmet";
import { svgBG } from "../utils/misc";
import Social from "../components/Social";
import Navigation from "../components/Navigation";

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
  padding-top: 20px;

  @media(min-width: 850px) {
    height: 100vh;
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
    <React.Fragment>
      <Navigation />
      <StyledMain>
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
        <PosedExtraBlock className="imagery" />

        <div className="content">
          <Helmet
            title="Contacting Antonio Rodriguez"
            meta={[
              {
                name: "description",
                content:
                  "Don't be shy! I'm open to mentoring, code reviews, projects or just casual conversation."
              }
            ]}
          />
          <H1>Contact Me</H1>

          <P>
            Write me at{" "}
            <a
              href="mailto:antoniwan+arodus@gmail.com?subject=Hey, Antonio!"
              title="Email Antonio Rodriguez"
            >
              antoniwan@gmail.com
            </a>{" "}
            or check out my social media links below. I'm fairly active in{" "}
            <a
              href="https://twitter.com/antoniwan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            ! After you follow me, check out some sweet{" "}
            <a
              href="https://open.spotify.com/user/antoniwan/playlist/18Fchy5u9YkOvUqtAKqMj1"
              target="_blank"
              rel="noopener noreferrer"
            >
              classical
            </a>{" "}
            and{" "}
            <a
              href="https://open.spotify.com/user/antoniwan/playlist/7gqDk94DAF0O5ifBuKAlVH"
              target="_blank"
              rel="noopener noreferrer"
            >
              salsa
            </a>{" "}
            playlists I created for you. Cheers!
          </P>
          <Social />
        </div>
      </StyledMain>
    </React.Fragment>
  );
};

export default Contact;

import React, { Component } from "react";
import posed from "react-pose";
import styled from "react-emotion";
import Helmet from "react-helmet";
import get from "lodash/get";
import axios from "axios";
import { svgBG } from "../utils/misc";
import Navigation from "../components/Navigation";

const StyledLoading = styled("div")`
  display: block;
  text-align: center;
  padding: 5rem;
  margin: 2rem;
  animation: blink 0.6s linear infinite;
  border: 1px solid pink;
  font-weight: bold;
  font-size: 2rem;
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

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


  img {
    width: 100%;
    cursor: pointer;
  }

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

class NotFound extends Component {
  constructor() {
    super();
    this.state = { gif: null };
    this.getRandomGiphy();

    this.getRandomGiphy = this.getRandomGiphy.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      gif: null
    });
    this.getRandomGiphy();
  }

  getRandomGiphy(tags = "fail") {
    // prettier-ignore
    const giphyRequest = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=${tags}&rating=R`;

    axios
      .get(giphyRequest)
      .then(response => {
        return response.data;
      })
      .then(data => {
        const gif = get(data, "data.image_url");
        this.setState({
          gif
        });
        return gif;
      });
  }
  render() {
    const { gif } = this.state;
    return (
      <React.Fragment>
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
        <Navigation />
        <StyledMain>
          <PosedExtraBlock className="imagery" />

          <div className="content">
            <H1 />

            <P>
              You just hit a route that doesn&#39;t exist. Here's a random
              Giphy.
            </P>

            {gif && (
              <img
                src={gif}
                onClick={this.handleClick}
                alt="Random animated gif"
              />
            )}
            {!gif && <StyledLoading>Loading...</StyledLoading>}
            <P>
              <small>Click on the Giphy for another one!</small>
            </P>
          </div>
        </StyledMain>
      </React.Fragment>
    );
  }
}

export default NotFound;

import React from "react";
import tools from "../data/techtools";
import { slugify } from "../utils/misc";
import styled from "react-emotion";

const StyledControls = styled("div")`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;
  justify-content: flex-start;
  button {
    height: 40px;
    line-height: 16px;

    position: relative;
    padding-top: 5px;
    background: #f0f0f0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    transition: all 0.6s;
    border: none;
    cursor: pointer;
    &.is-active {
      background: #fe687d;
      color: white;
    }
  }
`;
const StyledSkillItem = styled("div")`
  display: block;
  flex-grow: 1;
  flex-basis: 150px;
  &:hover {
    background: black;
    color: var(--color-white);

    p {
      color: var(--color-white);
    }
  }
  h5,
  p {
    margin: 0;
  }
  h5 {
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
  }
  padding: 1rem;
  border: none;
  border-bottom: 1px solid #dfdfdf;
`;

const StyledSkillItems = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const currentFilterInformation = {
  name: `current`,
  description: `I'm listing tools that greatly affect my daily workflow and projects
  in production, ordered alphabetically.`
};

const Controls = props => {
  return (
    <StyledControls {...props}>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "all" ? "is-active" : ""}
        data-filter="all"
        data-description="Now, this is a huge, useless list! 😂"
      >
        All
      </button>
      <button
        onClick={props.setStatus}
        className={
          props.currentFilter === currentFilterInformation.name
            ? "is-active"
            : ""
        }
        data-filter={currentFilterInformation.name}
        data-description={currentFilterInformation.description}
      >
        Currently using
      </button>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "learning" ? "is-active" : ""}
        data-filter="learning"
        data-description="I'm currently focused on learning and mastering these."
      >
        Learning
      </button>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "hobby" ? "is-active" : ""}
        data-filter="hobby"
        data-description="I use these for personal, freelance and fun projects and prototypes!"
      >
        Hobbyist
      </button>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "old" ? "is-active" : ""}
        data-filter="old"
        data-description={`"Remember that the most valuable antiques are dear old friends."`}
      >
        Legacy
      </button>
    </StyledControls>
  );
};

const SkillItem = props => {
  return (
    <StyledSkillItem className="skill-item">
      <h5>{props.title}</h5>
      <p>
        <small>{props.desc}</small>
      </p>
    </StyledSkillItem>
  );
};

class Toolbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: currentFilterInformation.name,
      description: currentFilterInformation.description
    };
    this.setStatus = this.setStatus.bind(this);
  }
  setStatus(e) {
    this.setState({
      filter: slugify(e.target.dataset.filter),
      description: e.target.dataset.description
    });
  }
  render() {
    const TechTools = tools["TechTools"];
    const skillItems = TechTools.filter(tool => {
      switch (this.state.filter) {
        case "current":
          return tool.actual && tool.prod;
        case "learning":
          return tool.learning;
        case "production":
          return tool.prod;
        case "hobby":
          return tool.actual && tool.hobby;
        case "old":
          return !tool.actual;
        case "all":
          return true;
        default:
          return true;
      }
    })
      .sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      })
      .map(tool => <SkillItem key={tool.title} {...tool} />);

    return (
      <div className="container">
        <Controls
          setStatus={this.setStatus}
          currentFilter={this.state.filter}
        />
        <p>
          <small>{this.state.description}</small>
        </p>

        <StyledSkillItems>{skillItems}</StyledSkillItems>
      </div>
    );
  }
}
export default Toolbox;

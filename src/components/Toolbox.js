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
  @media (hover: none) {
    &:hover {
      color: black;
      background: transparent;
      p {
        color: black;
      }
    }
  }
  h5,
  p {
    margin: 0;
  }
  h5 {
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }
  p {
    font-size: 0.8rem;
    line-height: 1rem;
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

const ControlButton = ({
  setStatus,
  currentFilter,
  filterId,
  filterName,
  filterDescription,
  children
}) => {
  return (
    <button
      onClick={setStatus}
      className={currentFilter === filterId ? "is-active" : ""}
      data-filter={filterId}
      data-description={filterDescription}
    >
      {children}
    </button>
  );
};

const Controls = ({ setStatus, currentFilter }) => {
  return (
    <StyledControls setStatus={setStatus} currentFilter={currentFilter}>
      <ControlButton
        filterId="current"
        filterName={initialFilterInformation.name}
        filterDescription={initialFilterInformation.description}
        setStatus={setStatus}
        currentFilter={currentFilter}
      >
        Currently using
      </ControlButton>

      <ControlButton
        filterId="learning"
        filterName="Learning"
        filterDescription="I'm currently focused on learning and mastering these."
        setStatus={setStatus}
        currentFilter={currentFilter}
      >
        Learning
      </ControlButton>

      <ControlButton
        filterId="hobby"
        filterName="Hobbyist"
        filterDescription="I use these for personal/fun projects and prototypes!"
        setStatus={setStatus}
        currentFilter={currentFilter}
      >
        Hobbyist
      </ControlButton>

      <ControlButton
        filterId="old"
        filterName="Legacy"
        filterDescription={`"Remember that the most valuable antiques are dear old friends."`}
        setStatus={setStatus}
        currentFilter={currentFilter}
      >
        Legacy
      </ControlButton>
    </StyledControls>
  );
};

const SkillItem = ({ title, desc }) => {
  return (
    <StyledSkillItem className="skill-item">
      <h5>{title}</h5>
      <p>
        <small>{desc}</small>
      </p>
    </StyledSkillItem>
  );
};

const initialFilterInformation = {
  name: `current`,
  description: `These tools (ordered alphabetically) greatly affect my daily workflow.`
};
class Toolbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: initialFilterInformation.name,
      description: initialFilterInformation.description
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

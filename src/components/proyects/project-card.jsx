import { Tag } from '../../enums/tags';
import Svelte from "./../techs-buttons/svelte"
import Angular from "../techs-buttons/angular"
import React from "../techs-buttons/react"
import Stripe from "../techs-buttons/stripe"
import Spring from "../techs-buttons/spring"

const renderTagComponents = (tag) => {
  switch (tag) {
    case Tag.Angular:
      return <Angular />;
    case Tag.React:
      return <React />;
    case Tag.Svelte:
      return <Svelte />;
    case Tag.Stripe:
      return <Stripe />;
    case Tag.Spring:
      return <Spring />;
    default:
      return <span className="tag">{tag}</span>;
  }
};

const ProjectCard = ({ name, description, tags, github_url }) => {
  return (
    <div className="project-card-sm">
      <div className="card-border-gradient"></div>
      <div className="card-container">
        <img src="https://unblast.com/wp-content/uploads/2018/08/Gradient-Mesh-22.jpg" alt="" />
        <div className="wrapper">
          <h1>{name}</h1>
          <p>{description}</p>
          <div>
            {tags.map((tag) => renderTagComponents(tag))}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProjectCard;

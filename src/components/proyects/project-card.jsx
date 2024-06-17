import { Tag } from '../../enums/tags';
import Svelte from "./../techs-buttons/svelte";
import Angular from "../techs-buttons/angular";
import React from "../techs-buttons/react";
import Stripe from "../techs-buttons/stripe";
import Spring from "../techs-buttons/spring";
import Astro from '../techs-buttons/astro';
import Paypal from '../techs-buttons/paypal';
import Node from '../techs-buttons/node';
import Firebase from '../techs-buttons/firebase';

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
    case Tag.Astro:
      return <Astro />
    case Tag.PayPal:
      return <Paypal />;
    case Tag.Node:
      return <Node />
    case Tag.Firebase:
      return <Firebase />
    default:
      return <span className="tag">{tag}</span>;
  }
};

const ProjectCard = ({ name, description, tags, github_url, image_url }) => {
  return (
    <div className="project-card-sm">
      <div className="card-border-gradient"></div>
      <div className="card-container">
        <img src={image_url} alt="" />
        <div className="wrapper">
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="flex items-center justify-center gap-x-5 absolute top-5 left-5">
            {tags.map((tag, index) => (
              <div key={index} className="tag-item">
                {renderTagComponents(tag)}
              </div>
            ))}
          </div>
          {/* enlace github del proyecto*/}
          <a href={github_url} className='p-2' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              <title>github</title>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

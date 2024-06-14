import { Tag } from "../enums/tags";
import type { Project } from "../models/project";

export const dataText = ["Full-Stack", "Front-end", "Back-end", "Developer"];

export const TAGS = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'React', 'Angular', 'Spring', 'SQL'];
export const DURATION = 15000;
export const ROWS = 1;
export const TAGS_PER_ROW = 10;
export const projects: Project[] = [
  {
    name: 'Reddit clone',
    description: 'Reddit clone with Astro, svelte and spring boot as backend',
    tags: [Tag.Svelte, Tag.Astro, Tag.Spring, Tag.SQL],
    github_url: 'https://github.com/pridato/reddit'
  },
  {
    name: 'TuRestauranteEnCasa',
    description: 'Web app to order food and track it through different roles',
    tags: [Tag.Angular, Tag.Spring, Tag.SQL],
    github_url: 'https://github.com/pridato/RestauranteEnCasa'
  },
  {
    name: 'Agapea',
    description: 'Web app to manage a library',
    tags: [Tag.React, Tag.Node, Tag.Firebase, Tag.Stripe, Tag.PayPal],
    github_url: 'https://github.com/pridato/Tienda-web-react'
  }
];
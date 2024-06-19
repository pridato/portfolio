import { Tag } from "../enums/tags";
import type { Project } from "../models/project";

export const dataText = ["Full-Stack", "Front-end", "Back-end", "Developer"];

export const TAGS = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'React', 'Angular', 'Spring', 'SQL'];
export const DURATION = 15000;
export const ROWS = 1;
export const TAGS_PER_ROW = 10;
export const projects: Project[] = [
  {
    name: 'Clon de Reddit',
    description: 'Clon de Reddit con Astro, Svelte y Spring Boot como backend',
    tags: [Tag.Svelte, Tag.Astro, Tag.Spring],
    github_url: 'https://github.com/pridato/reddit',
    image_url: '/images/reddit.png'
  },
  {
    name: 'TuRestauranteEnCasa',
    description: 'Aplicación web para pedir comida y rastrearla a través de diferentes roles',
    tags: [Tag.Angular, Tag.Spring],
    github_url: 'https://github.com/pridato/RestauranteEnCasa',
    image_url: '/images/restaurante.png'
  },
  {
    name: 'Agapea',
    description: 'Aplicación web para gestionar una biblioteca',
    tags: [Tag.React, Tag.Node, Tag.Firebase, Tag.Stripe],
    github_url: 'https://github.com/pridato/Tienda-web-react',
    image_url: '/images/agapea.png'
  }
];
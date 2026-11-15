import { webApp } from "./web-app";
import { website } from "./website";
import { mobile } from "./mobile";
import { other } from "./other";

export type Project = {
  name: string;
  category: string[];
  image: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [...webApp, ...website, ...mobile, ...other];

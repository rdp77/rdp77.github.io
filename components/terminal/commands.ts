import type { ComponentType } from "react";
import { About, Projects, Experience, Skills, Creators, Contact } from "./blocks";

export type Cmd = { name: string; hint: string; Block: ComponentType };

const Nothing = () => null;

export const commands: Cmd[] = [
  { name: "help", hint: "list commands", Block: Nothing }, // rendered by Terminal (needs `commands`)
  { name: "about", hint: "who I am", Block: About },
  { name: "projects", hint: "things I built", Block: Projects },
  { name: "experience", hint: "work and education", Block: Experience },
  { name: "skills", hint: "tools and stacks", Block: Skills },
  { name: "creators", hint: "content channels", Block: Creators },
  { name: "contact", hint: "email and socials", Block: Contact },
  { name: "clear", hint: "clear the screen", Block: Nothing },
  { name: "gui", hint: "back to the website", Block: Nothing },
];

export const findCommand = (input: string) =>
  commands.find((c) => `/${c.name}` === input.trim().toLowerCase());

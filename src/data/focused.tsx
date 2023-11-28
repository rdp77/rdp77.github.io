import React from "react";
import {
    faBullhorn,
    faCode,
    faLifeRing,
    faMagnifyingGlass,
    faMobileScreen,
    IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import {faChrome} from "@fortawesome/free-brands-svg-icons";

export interface SoftSkillData {
    icon: IconDefinition;
    name: string;
    description: React.ReactNode;
}

const softSkillData: SoftSkillData[] = [
    {
        icon: faCode,
        name: "Development Software",
        description: (
            <p>
                Take action and add to the portfolio personally or as a team by creating an organization for While we
                create websites based on client requests, we also take the initiative to sell products. You can search
                for it with keywords <a target="_blank" className="link" href="https://www.wreative.com/">Wreative</a>.
            </p>),
    },
    {
        icon: faMobileScreen,
        name: "Mobile Application",
        description: (
            <p>
                Developing mobile applications that are native and hybrid, I prefer developing Android than iOS because
                Android is open-source and can be developed freely.
            </p>),
    },
    {
        icon: faMagnifyingGlass,
        name: "Investigation and Analysis",
        description: (
            <p>
                Learn to investigate and analyze a system in order to run a system that is good, optimal, fast, and most
                importantly cheaper.
            </p>),
    },
    {
        icon: faBullhorn,
        name: "Digital Marketing",
        description: (
            <p>
                Always updating information in order to develop digital marketing that is accurate, precise, and always
                updated.
            </p>),
    },
    {
        icon: faLifeRing,
        name: "Awesome Supports",
        description: (
            <p>
                Providing support to the community, clients, and even internet citizens like me to create <a
                target="_blank" className="link" href="https://www.backupotak.com/">blogs</a> and join
                the community.
            </p>),
    },
    {
        icon: faChrome,
        name: "Web Development",
        description: (
            <p>
                Learn new things about web development further and learn how to make a web that is lightweight, good,
                and doesn&apos;t lose its functionality.
            </p>),
    },
];

export default softSkillData;

import React from "react";

export interface SoftSkillData {
    icon: string;
    name: string;
    description: React.ReactNode;
}

const softSkillData: SoftSkillData[] = [
    {
        icon: "ion ion-code",
        name: "Front-end",
        description: (
            <p>
                Always learn new technology by relying on the information spread on the internet and then applying it to
                the web front-end.
            </p>),
    },
    {
        icon: "ion ion-ipad",
        name: "Mobile Application",
        description: (
            <p>
                Developing mobile applications that are native and hybrid, I prefer developing Android than iOS because
                Android is open-source and can be developed freely.
            </p>),
    },
    {
        icon: "ion ion-ios-search-strong",
        name: "Investigation and Analysis",
        description: (
            <p>
                Learn to investigate and analyze a system in order to run a system that is good, optimal, fast, and most
                importantly cheaper.
            </p>),
    },
    {
        icon: "ion ion-speakerphone",
        name: "Digital Marketing",
        description: (
            <p>
                Always updating information in order to develop digital marketing that is accurate, precise, and always
                updated.
            </p>),
    },
    {
        icon: "ion ion-help-buoy",
        name: "Awesome Supports",
        description: (
            <p>
                Providing support to the community, clients, and even internet citizens like me to create <a
                target="_blank" rel="noopener" className="link" href="https://www.backupotak.com/">blogs</a> and join
                the community.
            </p>),
    },
    {
        icon: "ion ion-social-chrome",
        name: "Web Development",
        description: (
            <p>
                Learn new things about web development further and learn how to make a web that is lightweight, good,
                and doesn&apos;t lose its functionality.
            </p>),
    },
];

export default softSkillData;

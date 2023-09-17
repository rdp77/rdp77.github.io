export interface ExperienceData {
    id: number;
    title: string;
    name: string;
    desc: string;
}

const experienceData: ExperienceData[] = [
    {
        id: 1,
        title: "2017",
        name: "Internship - Diskominfo",
        desc: "Plunge into the community, to help employees as teachers and share the knowledge I gained in school, such as teaching word processing applications, data and computer use in the surrounding community. Apart from that I perform maintenance and optimization on each and every computer used for learning so that users are more comfortable when using these facilities.",
    },
    {
        id: 2,
        title: "2017 - 2018",
        name: "Technician - Freelance",
        desc: "Work directly as a team to do jobs such as network installations, network configuration using mikrotik to perform troubleshooting on a network.",
    },
    {
        id: 3,
        title: "2018",
        name: "Technician - Indihome",
        desc: "Installing the internet using a provider from Telkom, this installation is carried out from the customer's home to the Optical Distribution Point or ODP, after that configure the access point according to the ip server given, then by configuring the dhcp server on the access point so that the access point can provide ip dhcp client to client.",
    },
    {
        id: 4,
        title: "2020 - 2021",
        name: "Web Developer - CV. Batu Beling",
        desc: "Become a Fullstack Developer by developing and creating internal systems the company uses the Laravel Framework, besides that I also act as IT Support if needed and carry out routine maintenance of the CMS website. I also set the strategy related to digital marketing needed to Get more feedback on social media and websites.",
    },
    {
        id: 5,
        title: "2022 - Now",
        name: "Back End Developer - AsiaCommerce Network",
        desc: "Build API Service for mobile and Front End needs, make improvements and maintenance to available APIs and learn to implement new technologies such as GraphQL, currently still using the Laravel Framework with CI / CD support.",
    },
];

export default experienceData;

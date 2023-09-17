export interface MenuData {
    name: string;
    url: string;
    button: boolean;
}

export const menuData: MenuData[] = [
    {
        name: "Home",
        url: "/",
        button: false,
    },
    {
        name: "Resume",
        url: "/resume",
        button: false,
    },
    {
        name: "Portfolio",
        url: "/portfolio",
        button: false,
    },
    {
        name: "Awards & Certification",
        url: "/awards",
        button: false,
    },
    {
        name: "Contacts",
        url: "/contact",
        button: true,
    },
];
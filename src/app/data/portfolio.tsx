import Networking from "../../assets/image/portfolio/network.png";
import Code from "../../assets/image/portfolio/code.png";
import Wordpress from "../../assets/image/portfolio/wordpress.png";
import DryasLibrary from "../../assets/image/portfolio/dryaslibrary.png";
import Corona from "../../assets/image/portfolio/corona.png";
import SportsSkuyy from "../../assets/image/portfolio/sportsskuyy.png";
import StackGames from "../../assets/image/portfolio/stack-games.png";
import OurEnterprise from "../../assets/image/portfolio/ourenterprise.png";
import Veyaz from "../../assets/image/portfolio/veyaz.png";
import KSPSumberRejeki from "../../assets/image/portfolio/ksp-sumberrejeki.png";
import Andromart from "../../assets/image/portfolio/andromart.png";
import BatuBeling from "../../assets/image/portfolio/batubeling.png";
import {StaticImageData} from "next/image";

export interface PortfolioData {
    id: number;
    title: string;
    category: string;
    image: StaticImageData;
    permalink: string;
}

export const portfolioData: PortfolioData[] = [
    {
        id: 1,
        title: "Network Installation: Universitas Airlangga",
        category: "Networking",
        image: Networking,
        permalink: "test1",
    },
    {
        id: 2,
        title: "Dryas Library",
        category: "Programming",
        image: DryasLibrary,
        permalink: "test2",
    },
    {
        id: 3,
        title: "Network Installation and Configuration",
        category: "Networking",
        image: Networking,
        permalink: "test2",
    },
    {
        id: 4,
        title: "Corona",
        category: "Programming",
        image: Corona,
        permalink: "test2",
    },
    {
        id: 5,
        title: "Traffic Light Simulation",
        category: "Programming",
        image: Networking,
        permalink: "test2",
    },
    {
        id: 6,
        title: "Sports Skuyy",
        category: "Mobile",
        image: SportsSkuyy,
        permalink: "test2",
    },
    {
        id: 7,
        title: "Stack Games",
        category: "Programming",
        image: StackGames,
        permalink: "test2",
    },
    {
        id: 8,
        title: "Personal Web",
        category: "Programming",
        image: Code,
        permalink: "test2",
    },
    {
        id: 9,
        title: "Messi Kasih Khitan",
        category: "CMS",
        image: Wordpress,
        permalink: "test2",
    },
    {
        id: 10,
        title: "Our Enterprise",
        category: "Programming",
        image: OurEnterprise,
        permalink: "test2",
    },
    {
        id: 11,
        title: "Pode",
        category: "Programming",
        image: Code,
        permalink: "test2",
    },
    {
        id: 12,
        title: "Veyaz",
        category: "Programming",
        image: Veyaz,
        permalink: "test2",
    },
    {
        id: 13,
        title: "KSP Sumber Rejeki",
        category: "Programming",
        image: KSPSumberRejeki,
        permalink: "test2",
    },
    {
        id: 14,
        title: "Andromart",
        category: "Programming",
        image: Andromart,
        permalink: "test2",
    },
    {
        id: 15,
        title: "Report Management Batu Beling",
        category: "Programming",
        image: BatuBeling,
        permalink: "test2",
    },
];

export const uniqueCategories = Array.from(new Set(portfolioData.map(item => item.category)));

export const portfolioPermalinks = portfolioData.map(item => item.permalink);


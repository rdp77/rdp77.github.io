import {convertToPermalink} from "../utils/permalink";
import {imageAssets} from "@/app/data/portfolio_assets";
import {StaticImageData} from "next/image";
import NetworkInstallationUniversityAirlangga from "@/app/data/portfolio/network_installation_university_airlangga";
import React from "react";

export interface PortfolioData {
    id: number;
    title: string;
    category: string;
    image: StaticImageData;
    permalink: string;
    content: React.ReactNode;
}

export const portfolioData: PortfolioData[] = [
    {
        id: 1,
        title: "Network Installation: Universitas Airlangga",
        category: "Networking",
        image: imageAssets.Networking,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 2,
        title: "Dryas Library",
        category: "Programming",
        image: imageAssets.DryasLibrary,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 3,
        title: "Network Installation and Configuration",
        category: "Networking",
        image: imageAssets.Networking,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 4,
        title: "Corona",
        category: "Programming",
        image: imageAssets.Corona,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 5,
        title: "Traffic Light Simulation",
        category: "Programming",
        image: imageAssets.Networking,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 6,
        title: "Sports Skuyy",
        category: "Mobile",
        image: imageAssets.SportsSkuyy,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 7,
        title: "Stack Games",
        category: "Programming",
        image: imageAssets.StackGames,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 8,
        title: "Personal Web",
        category: "Programming",
        image: imageAssets.Code,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 9,
        title: "Messi Kasih Khitan",
        category: "CMS",
        image: imageAssets.Wordpress,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 10,
        title: "Our Enterprise",
        category: "Programming",
        image: imageAssets.OurEnterprise,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 11,
        title: "Pode",
        category: "Programming",
        image: imageAssets.Code,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 12,
        title: "Veyaz",
        category: "Programming",
        image: imageAssets.Veyaz,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 13,
        title: "KSP Sumber Rejeki",
        category: "Programming",
        image: imageAssets.KSPSumberRejeki,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 14,
        title: "Andromart",
        category: "Programming",
        image: imageAssets.Andromart,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 15,
        title: "Report Management Batu Beling",
        category: "Programming",
        image: imageAssets.BatuBeling,
        content: <NetworkInstallationUniversityAirlangga/>
    },
].map((portfolio) => ({
    ...portfolio,
    permalink: "/portfolio/" + convertToPermalink(portfolio.title),
}));

export const uniqueCategories = Array.from(new Set(portfolioData.map(item => item.category)));

export const portfolioPermalinks = portfolioData.map(item => item.permalink);

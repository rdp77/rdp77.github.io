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
        category: "App",
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
        category: "App",
        image: imageAssets.Corona,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 5,
        title: "Traffic Light Simulation",
        category: "App",
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
        category: "App",
        image: imageAssets.StackGames,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 8,
        title: "Personal Web",
        category: "App",
        image: imageAssets.Code,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 9,
        title: "Messi Kasih Khitan",
        category: "Website",
        image: imageAssets.Wordpress,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 10,
        title: "Our Enterprise",
        category: "App",
        image: imageAssets.OurEnterprise,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 11,
        title: "Pode",
        category: "App",
        image: imageAssets.Code,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 12,
        title: "Veyaz",
        category: "App",
        image: imageAssets.Veyaz,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 13,
        title: "KSP Sumber Rejeki",
        category: "App",
        image: imageAssets.KSPSumberRejeki,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 14,
        title: "Andromart",
        category: "App",
        image: imageAssets.Andromart,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 15,
        title: "Report Management BatuBeling",
        category: "App",
        image: imageAssets.BatuBeling,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 16,
        title: "CV. Bima Sakti",
        category: "Website",
        image: imageAssets.Wordpress,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 17,
        title: "Farmer Distribution",
        category: "App",
        image: imageAssets.FarmerDistribution,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 18,
        title: "First Media Surabaya",
        category: "Website",
        image: imageAssets.FirstMedia,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 19,
        title: "Sakpattana Jawa Timur",
        category: "Website",
        image: imageAssets.Sakpattana,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 20,
        title: "CV. Putra Kubota",
        category: "Website",
        image: imageAssets.Kubota,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 21,
        title: "CV. Wahyu Dewanagari",
        category: "Website",
        image: imageAssets.WahyuDewanagari,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 22,
        title: "CSR Cleaning",
        category: "Digital-Marketing",
        image: imageAssets.CSRCleaning,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 23,
        title: "IKAPENS",
        category: "Mobile",
        image: imageAssets.IKAPENS,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 24,
        title: "AsiaCommerce",
        category: "App",
        image: imageAssets.AsiaCommerce,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 25,
        title: "PolaPedia",
        category: "App",
        image: imageAssets.PolaPedia,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 26,
        title: "Wara Wara",
        category: "Mobile",
        image: imageAssets.Code,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 27,
        title: "Hardware Maintenance Management",
        category: "App Mobile",
        image: imageAssets.HMM,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 28,
        title: "PT. Modern Coco International",
        category: "Website",
        image: imageAssets.ModernCocoInternational,
        content: <NetworkInstallationUniversityAirlangga/>
    },
].map((portfolio) => ({
    ...portfolio,
    permalink: "portfolio/" + convertToPermalink(portfolio.title),
}));

export const uniqueCategories = Array.from(new Set(portfolioData.map(item => item.category)));

export const portfolioPermalinks = portfolioData.map(item => item.permalink);

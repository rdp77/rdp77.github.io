import {convertToPermalink} from "@/utils/permalink";
import {imageAssets} from "@/data/portfolio-assets";
import {StaticImageData} from "next/image";
import NetworkInstallationUniversityAirlangga from "@/data/portfolio/network-installation-university-airlangga";
import React from "react";
import DryasLibrary from "@/data/portfolio/dryas-library";
import WarunkZamanNow from "@/data/portfolio/warunk-zaman-now";
import Corona from "@/data/portfolio/corona";
import TrafficLightSimulation from "@/data/portfolio/traffic-light-simulation";
import SportsSkuyy from "@/data/portfolio/sports-skuyy";
import StackGames from "@/data/portfolio/stack-games";
import PersonalWeb from "@/data/portfolio/personal-web";
import MessiKasihKhitan from "@/data/portfolio/messi-kasih-khitan";
import OurEnterprise from "@/data/portfolio/ourenterprise";
import Pode from "@/data/portfolio/pode";
import Veyaz from "@/data/portfolio/veyaz";
import KSPSumberRejeki from "@/data/portfolio/ksp-sumber-rejeki";
import Andromart from "@/data/portfolio/andromart";
import BatuBeling from "@/data/portfolio/batubeling";

export interface PortfolioData {
    id: number;
    title: string;
    description: string;
    keywords: string[];
    category: string;
    image: StaticImageData;
    permalink: string;
    content: React.ReactNode;
}

export const portfolioData: PortfolioData[] = [
    {
        id: 1,
        title: "Universitas Airlangga",
        description: "Network Installation University Airlangga Campus B : Mikrotik, Surabaya, Indonesia",
        keywords: ["mikrotik", "Airlangga", "Airlangga Campus B", "Network Installation"],
        category: "Networking",
        image: imageAssets.Networking,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 2,
        title: "Dryas Library",
        description: "Library Online App web with Laravel, and managed data with PostGreSQL and AJAX to data live",
        keywords: ["Laravel", "Library Online", "API", "Website", "PostGreSQL", "AJAX"],
        category: "App",
        image: imageAssets.DryasLibrary,
        content: <DryasLibrary/>
    },
    {
        id: 3,
        title: "Warunk Zaman Now",
        description: "Network Installation with parallel network, managed by Mikrotik and TPLink Switch",
        keywords: ["Mikrotik", "Network Installation", "Taman Apsari Surabaya"],
        category: "Networking",
        image: imageAssets.Networking,
        content: <WarunkZamanNow/>
    },
    {
        id: 4,
        title: "Corona",
        description: "App to monitoring COVID-19 in the world with filtering features in Indonesia and many countries",
        keywords: ["Flutter", "API", "Laravel"],
        category: "App",
        image: imageAssets.Corona,
        content: <Corona/>
    },
    {
        id: 5,
        title: "Traffic Light Simulation",
        description: "App to simulation traffic light with 4 roads and 4 cars to simulate, use VB.net to created this",
        keywords: ["Visual Basic", "Visual Basic .NET", "GUI"],
        category: "App",
        image: imageAssets.Networking,
        content: <TrafficLightSimulation/>
    },
    {
        id: 6,
        title: "Sports Skuyy",
        description: "App to train the body to exercise based on calories, build with Java and kotlin",
        keywords: ["Java", "Kotlin", "MySQL", "Android Studio"],
        category: "Mobile",
        image: imageAssets.SportsSkuyy,
        content: <SportsSkuyy/>
    },
    {
        id: 7,
        title: "Stack Games",
        description: "Gaming portal, to multiple game landing pages and top-up features with Xendit Payment Gateway",
        keywords: ["Laravel", "MySQL", "AJAX", "Xendit"],
        category: "App",
        image: imageAssets.StackGames,
        content: <StackGames/>
    },
    {
        id: 8,
        title: "Personal Web",
        description: "Web portfolio for my personal documentation, using newer technology stacks and fastest performance",
        keywords: ["Jekyll", "Static Site Generator", "Ruby", "Javascript", "NextJS"],
        category: "App",
        image: imageAssets.Code,
        content: <PersonalWeb/>
    },
    {
        id: 9,
        title: "Messi Kasih Khitan",
        description: "Landing page website using wordpress to create Messi Kasih Khitan business website",
        keywords: ["Messi Kasih Khitan", "Wordpress", "SEO", "Sidoarjo"],
        category: "Website",
        image: imageAssets.Wordpress,
        content: <MessiKasihKhitan/>
    },
    {
        id: 10,
        title: "Our Enterprise",
        description: "Website portal or landing page to describe our Company with Gatsby for tech stack",
        keywords: ["Gatsby", "Javascript", "Our Enterprise"],
        category: "App",
        image: imageAssets.OurEnterprise,
        content: <OurEnterprise/>
    },
    {
        id: 11,
        title: "Pode",
        description: "Web portfolio to present image portfolios, to support designers or 3D mockup portfolios",
        keywords: ["Jekyll", "Ruby", "Portfolio Web"],
        category: "App",
        image: imageAssets.Code,
        content: <Pode/>
    },
    {
        id: 12,
        title: "Veyaz",
        description: "Veyaz is template Laravel Developer to fastest developing and create new project Laravel",
        keywords: ["Template", "Laravel", "Livewire"],
        category: "App",
        image: imageAssets.Veyaz,
        content: <Veyaz/>
    },
    {
        id: 13,
        title: "KSP Sumber Rejeki",
        description: "Web application to support accounting, savings and loans at KSP Sumber Rejeki, built with Laravel",
        keywords: ["KSP Sumber Rejeki", "Laravel", "Accounting"],
        category: "App",
        image: imageAssets.KSPSumberRejeki,
        content: <KSPSumberRejeki/>
    },
    {
        id: 14,
        title: "Andromart",
        description: "Applications to enable advanced inventory and accounting data, for example, balance sheets",
        keywords: ["Andromart", "Laravel", "Accounting"],
        category: "App",
        image: imageAssets.Andromart,
        content: <Andromart/>
    },
    {
        id: 15,
        title: "Report Management BatuBeling",
        description: "Report management to support online employee reports in BatuBeling Company",
        keywords: ["Batu Beling", "BatuBeling", "Report Management", "Laravel"],
        category: "App",
        image: imageAssets.BatuBeling,
        content: <BatuBeling/>
    },
    {
        id: 16,
        title: "CV. Bima Sakti",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
        category: "Website",
        image: imageAssets.Wordpress,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 17,
        title: "Farmer Distribution",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
        category: "App",
        image: imageAssets.FarmerDistribution,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 18,
        title: "First Media Surabaya",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
        category: "Website",
        image: imageAssets.FirstMedia,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 19,
        title: "Sakpattana Jawa Timur",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
        category: "Website",
        image: imageAssets.Sakpattana,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 20,
        title: "CV. Putra Kubota",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
        category: "Website",
        image: imageAssets.Kubota,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 21,
        title: "CV. Wahyu Dewanagari",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
        category: "Website",
        image: imageAssets.WahyuDewanagari,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 22,
        title: "CSR Cleaning",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
        category: "Digital-Marketing",
        image: imageAssets.CSRCleaning,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 23,
        title: "IKAPENS",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
        category: "Mobile",
        image: imageAssets.IKAPENS,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 24,
        title: "AsiaCommerce",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
        category: "App",
        image: imageAssets.AsiaCommerce,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 25,
        title: "PolaPedia",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
        category: "App",
        image: imageAssets.PolaPedia,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 26,
        title: "Wara Wara",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
        category: "Mobile",
        image: imageAssets.Code,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 27,
        title: "Hardware Maintenance Management",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
        category: "App Mobile",
        image: imageAssets.HMM,
        content: <NetworkInstallationUniversityAirlangga/>
    },
    {
        id: 28,
        title: "PT. Modern Coco International",
        description: "Moh Ravi Dwi Putra",
        keywords: ["Moh", "Ravi", "Dwi", "Putra", "rdp77"],
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

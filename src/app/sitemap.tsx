import {MetadataRoute} from 'next'
import {portfolioPermalinks} from "@/data/portfolio";
import {mainPermalinks} from "@/data/menu";

export default function Sitemap(): MetadataRoute.Sitemap {
    const baseUrlEnv = process.env.APP_URL?.toString() ?? '/';
    const baseUrl = baseUrlEnv.substring(0, baseUrlEnv.length - 1);

    const mainPages: { url: string; lastModified: string }[] = mainPermalinks.map((url) => ({
        url: `${baseUrl}${url}`,
        lastModified: "2020-03-31T19:11:30+01:00",
    }));

    const portfolioPermalinksUnique: string[] = Array.from(new Set(portfolioPermalinks.map(item => item)));
    const portfolioPages: { url: string; lastModified: string }[] = portfolioPermalinksUnique.map((url) => ({
        url: `${baseUrlEnv}${url}`,
        lastModified: "2020-03-31T19:11:30+01:00",
    }));

    return [...mainPages, ...portfolioPages];
}
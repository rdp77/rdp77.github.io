import {MetadataRoute} from 'next'
import {portfolioPermalinks} from "@/data/portfolio";
import {mainPermalinks} from "@/data/menu";

export default function Sitemap(): MetadataRoute.Sitemap {
    const baseUrlEnv = process.env.APP_URL?.toString() ?? '/';
    const baseUrl = baseUrlEnv.substring(0, baseUrlEnv.length - 1);

    const mainPages: { url: string; lastModified: string }[] = mainPermalinks.map((url) => ({
        url: `${baseUrl}${url}`,
        lastModified: new Date().toISOString(),
    }));

    const portfolioPermalinksUnique: string[] = Array.from(new Set(portfolioPermalinks.map(item => item)));
    const portfolioPages: { url: string; lastModified: string }[] = portfolioPermalinksUnique.map((url) => ({
        url: `${baseUrlEnv}${url}`,
        lastModified: new Date().toISOString(),
    }));

    return [...mainPages, ...portfolioPages];
}
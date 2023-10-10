import {MetadataRoute} from 'next'
import path from 'path';
import fs from 'fs';
import {portfolioPermalinks} from "@/app/data/portfolio";

function getPagesList(dir: string, fileList: string[] = []): string[] {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const isDirectory = fs.statSync(filePath).isDirectory();

        if (file.startsWith('_')) {
            return;
        }

        if (isDirectory) {
            getPagesList(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    });

    return fileList;
}

export default function Sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.APP_URL;
    const pagesPath = path.join(process.cwd(), 'src', 'pages');
    const pagesList = getPagesList(pagesPath);

    const paths = pagesList.map((page) => {
        const relativePath = path.relative(pagesPath, page);
        const pagePath = relativePath.replace(/\.tsx?$/, '').replace(/\\+/g, '/');
        return pagePath.includes('index') ? pagePath.replace('index', '') : pagePath;
    }).filter((pagePath) => pagePath !== '404' && pagePath !== 'portfolio/[permalink]');

    const mainPage: { url: string; lastModified: string }[] = paths.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: "2020-03-31T19:11:30+01:00",
    }))

    const portfolioPermalinksUnique: string[] = Array.from(new Set(portfolioPermalinks.map(item => item)));
    const portfolioPages: { url: string; lastModified: string }[] = portfolioPermalinksUnique.map((url) => ({
        url: `${baseUrl}${url}`,
        lastModified: "2020-03-31T19:11:30+01:00",
    }));

    return [...mainPage, ...portfolioPages];
}
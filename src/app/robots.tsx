import {MetadataRoute} from 'next'

export default function Robots(): MetadataRoute.Robots {
    const baseUrl = process.env.APP_URL;

    return {
        rules: {
            userAgent: '*',
            allow: '*',
        },
        sitemap: baseUrl + "sitemap.xml",
    }
}
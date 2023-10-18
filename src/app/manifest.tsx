import {MetadataRoute} from 'next'
import {iconAssets} from "@/data/icon-assets";

export default function Manifest(): MetadataRoute.Manifest {
    return {
        name: 'Moh Ravi Dwi Putra',
        short_name: 'rdp77',
        description: 'Moh Ravi Dwi Putra profile website, which contains important information about him such as your resume, portfolio, awards, certification, and contact.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#28282f',
        theme_color: '#28282f',
        icons: [
            {
                src: iconAssets.favicon,
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: iconAssets.icon48,
                sizes: '48x48',
                type: 'image/png'
            },
            {
                src: iconAssets.icon72,
                sizes: '72x72',
                type: 'image/png'
            },
            {
                src: iconAssets.icon96,
                sizes: '96x96',
                type: 'image/png'
            },
            {
                src: iconAssets.icon144,
                sizes: '144x144',
                type: 'image/png'
            },
            {
                src: iconAssets.icon192,
                sizes: '192x192',
                type: 'image/png'
            }
        ],
    }
}
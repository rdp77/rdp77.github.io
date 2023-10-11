import Head from 'next/head';
import React from "react";
import {WEBSITE_DESCRIPTION, WEBSITE_KEYWORDS} from "@/app/constant/meta_data";
import defaultImage from "../assets/image/avatar.png";
import {description} from "@/app/data/about";
import {useRouter} from 'next/router';

interface MetaDataProps {
    title: string;
}

const MetaData: React.FC<MetaDataProps> = ({title}) => {
    const defaultImageUrl = defaultImage.src;
    const currentUrl = process.env.APP_URL + useRouter().asPath.replace('/', '');

    return (
        <Head>
            {/*HTML Meta Tags*/}
            <title>{title}</title>
            <meta name="description" content={WEBSITE_DESCRIPTION}/>
            <meta name="keywords" content={WEBSITE_KEYWORDS}/>

            {/*Facebook Meta Tags*/}
            <meta property="og:locale" content="en_US"/>
            <meta property="og:site_name" content={title}/>
            <meta property="og:image" content={defaultImageUrl}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:url" content={currentUrl}/>
            <meta property="og:type" content="profile"/>
            <meta property="profile:first_name" content="Moh Ravi"/>
            <meta property="profile:last_name" content="Dwi Putra"/>
            <meta property="profile:username" content="rdp77"/>
            <meta property="profile:gender" content="male"/>

            {/*Twitter Meta Tags*/}
            <meta property="twitter:image" content={defaultImageUrl}/>
            <meta property="twitter:card" content={defaultImageUrl}/>
            <meta property="twitter:title" content={title}/>
            <meta property="twitter:description" content={description}/>

            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link rel="stylesheet" href="/assets/css/basic.css"/>
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link rel="stylesheet" href="/assets/css/layout.css"/>
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link rel="stylesheet" href="/assets/css/animate.min.css"/>
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link rel="stylesheet" href="/assets/css/orange.css"/>
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link rel="stylesheet" href="/assets/css/dark.css"/>
        </Head>
    );
};

export default MetaData;

import React from 'react';
import {WEBSITE_NAME} from "@/data/constant/summary";
import Script from "next/script";
import {iconAssets} from "@/data/icon-assets";
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Metadata} from "next";
import {WEBSITE_DESCRIPTION, WEBSITE_KEYWORDS} from "@/data/constant/meta-data";
import {Roboto_Mono} from 'next/font/google';
import defaultImage from "@/assets/image/avatar.png";

config.autoAddCss = false

const robotoMono = Roboto_Mono({
    weight: ['100', '300', '400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})

interface LayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    metadataBase: new URL(process.env.APP_URL?.toString() ?? '/'),
    creator: WEBSITE_NAME,
    publisher: WEBSITE_NAME,
    description: WEBSITE_DESCRIPTION,
    keywords: WEBSITE_KEYWORDS,
    category: 'Personal Web',
    alternates: {
        canonical: process.env.APP_URL
    },
    authors: {
        name: WEBSITE_NAME,
        url: process.env.APP_URL,
    },
    verification: {
        google: '8FB68inDTkKFOhWeQv2l6zfpF7oYJEn6wqZDOTDd6dk',
    },
    openGraph: {
        type: 'profile',
        firstName: 'Moh Ravi',
        lastName: 'Dwi Putra',
        gender: 'Male',
        username: 'rdp77',
        siteName: WEBSITE_NAME,
        emails: 'hi@ravidwiputra.web.id',
        phoneNumbers: '+6285159997670',
        locale: 'en_US',
        alternateLocale: 'id',
        title: WEBSITE_NAME,
        description: WEBSITE_DESCRIPTION,
        url: process.env.APP_URL,
        countryName: 'Indonesia',
        images: defaultImage.src,
    },
    twitter: {
        card: 'summary_large_image',
        title: WEBSITE_NAME,
        description: WEBSITE_DESCRIPTION,
        images: [defaultImage.src],
        creator: '@ravidwiputra'
    },
    robots: {
        follow: true,
        index: true,
        googleBot: {
            follow: true,
            index: true,
        }
    }
}

const RootLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <html className={robotoMono.className} lang="en">
        <head>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,100,300italic,300,100italic,400italic,500,500italic,700,700italic&amp;subset=latin,cyrillic&display=swap"
                rel="stylesheet"
            />
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

            {/*Meta Robots Search*/}
            <meta charSet="UTF-8"/>
            <meta httpEquiv="Content-Language" content="all-language"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>
            <meta name="geo.placename" content="Indonesia"/>
            <meta name="geo.country" content="id"/>
            <meta name="geo.region" content="ID-BT"/>
            <meta name="language" content="id"/>
            <meta name="target" content="global"/>
            <meta name="distribution" content="global"/>
            <meta name="rating" content="general"/>
            <meta name="revisit-after" content="1 days"/>
            <meta name="MSSmartTagsPreventParsing" content="true"/>
            <meta name="Googlebot-Image" content="follow, all"/>
            <meta name="msnbot" content="follow, all"/>
            <meta name="Slurp" content="follow, all"/>
            <meta name="ZyBorg" content="follow, all"/>
            <meta name="Scooter" content="follow, all"/>
            <meta name="spiders" content="all"/>
            <meta name="WEBCRAWLERS" content="all"/>
            <meta
                name="search engines"
                content="aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot"
            />
            <meta name="ahrefs-site-verification" content="b850a8261da5283732a7d275f2ca5d60d7241d12a5e3ed0e6f344d91cb22721c"/>

            {/*Color*/}
            <meta content="#26272c" name="theme-color"/>
            <meta content="#26272c" name="msapplication-navbutton-color"/>
            <meta content="#26272c" name="apple-mobile-web-app-status-bar-style"/>

            {/*Favicon*/}
            <link href={iconAssets.favicon} rel="shortcut icon" type='image/x-icon'/>
            <link rel="apple-touch-icon" sizes="180x180" href={iconAssets.icon180}/>
            <link rel="icon" type="image/png" sizes="192x192" href={iconAssets.icon192}/>
            <link rel="icon" type="image/png" sizes="32x32" href={iconAssets.icon32}/>
            <link rel="icon" type="image/png" sizes="96x96" href={iconAssets.icon96}/>
            <link rel="icon" type="image/png" sizes="16x16" href={iconAssets.icon16}/>
            <meta name="msapplication-TileImage" content={iconAssets.icon144}/>
        </head>
        <body>
        <main>
            {children}
        </main>
        </body>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-51LP1W0ZK4"/>
        <Script id="google-analytics">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-51LP1W0ZK4');
                `}
        </Script>
        </html>
    );
};

export default RootLayout;

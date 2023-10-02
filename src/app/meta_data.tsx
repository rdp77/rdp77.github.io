import Head from 'next/head';
import React from "react";
import {WEBSITE_DESCRIPTION, WEBSITE_KEYWORDS} from "@/app/constant/meta_data";
import {Roboto_Mono} from "next/font/google";

const roboto = Roboto_Mono({
    weight: ['100', '300', '400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin', 'cyrillic'],
})

interface MetaDataProps {
    title: string;
}

const MetaData: React.FC<MetaDataProps> = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={WEBSITE_DESCRIPTION}/>
            <meta name="keywords" content={WEBSITE_KEYWORDS}/>
                {/* eslint-disable-next-line @next/next/google-font-display */}
            <link
                href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,100,300italic,300,100italic,400italic,500,500italic,700,700italic&amp;subset=latin,cyrillic"
                rel="stylesheet"
            />

            {/*Meta Robots Search*/}
            <meta content='text/html; charset=UTF-8' httpEquiv='Content-Type'/>
            <meta content='all-language' httpEquiv='Content-Language'/>
            <meta content='IE=Edge' httpEquiv='X-UA-Compatible'/>
            <meta content='Indonesia' name='geo.placename'/>
            <meta content='id' name='geo.country'/>
            <meta content='ID-BT' name='geo.region'/>
            <meta content='id' name='language'/>
            <meta content='global' name='target'/>
            <meta content='global' name='distribution'/>
            <meta content='general' name='rating'/>
            <meta content='1 days' name='revisit-after'/>
            <meta content='true' name='MSSmartTagsPreventParsing'/>
            <meta content='index, follow' name='googlebot'/>
            <meta content='follow, all' name='Googlebot-Image'/>
            <meta content='follow, all' name='msnbot'/>
            <meta content='follow, all' name='Slurp'/>
            <meta content='follow, all' name='ZyBorg'/>
            <meta content='follow, all' name='Scooter'/>
            <meta content='all' name='spiders'/>
            <meta content='all' name='WEBCRAWLERS'/>
            <meta
                content='aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot'
                name='search engines'/>

            {/*Color*/}
            <meta content="#26272c" name="theme-color"/>
            <meta content="#26272c" name="msapplication-navbutton-color"/>
            <meta content="#26272c" name="apple-mobile-web-app-status-bar-style"/>

            {/*Mobile Specific Metas*/}
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="manifest" href="/assets/manifest.json"/>
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

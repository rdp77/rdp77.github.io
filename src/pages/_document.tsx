import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,100,300italic,300,100italic,400italic,500,500italic,700,700italic&amp;subset=latin,cyrillic&display=swap"
                        rel="stylesheet"
                    />

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
                    <meta name="googlebot" content="index, follow"/>
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

                    {/*Color*/}
                    <meta content="#26272c" name="theme-color"/>
                    <meta content="#26272c" name="msapplication-navbutton-color"/>
                    <meta content="#26272c" name="apple-mobile-web-app-status-bar-style"/>

                    {/*Mobile Specific Metas*/}
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="manifest" href="/assets/manifest.json"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
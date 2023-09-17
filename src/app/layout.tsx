import React from 'react';
import {Roboto_Mono} from "next/font/google";
import Loader from "@/components/loader";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import {WEBSITE_NAME} from "@/app/constant/summary";
import MetaData from "@/app/meta_data";
import Script from "next/script";
import Cursor from "@/components/cursor";

interface LayoutProps {
    children: React.ReactNode;
    title?: string
}

const Layout: React.FC<LayoutProps> = ({children, title}) => {
    const pageTitle = title ? `${title} | ${WEBSITE_NAME}` : WEBSITE_NAME;

    return (
        <>
            <MetaData title={pageTitle}></MetaData>
            <main>
                <Loader></Loader>
                <div className="container">
                    <Menu></Menu>
                    <div className="wrapper">
                        {children}
                    </div>
                    <Footer></Footer>
                    <div className="line top"></div>
                    <div className="line bottom"></div>
                    <div className="line left"></div>
                    <div className="line right"></div>
                    <Cursor></Cursor>
                </div>
            </main>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-51LP1W0ZK4"/>
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-51LP1W0ZK4');
                `}
            </Script>
        </>
    );
};

export default Layout;

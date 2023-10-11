import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {redirectDomain} from "@/app/utils/redirect";
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';

config.autoAddCss = false

interface MyAppProps {
    Component: React.ComponentType;
    pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({Component, pageProps}) => {
    const router = useRouter();

    useEffect(() => {
        redirectDomain();
    }, [router.pathname]);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
};

export default MyApp;
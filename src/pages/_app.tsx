import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {redirectDomain} from "@/app/utils/redirect";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
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

    return <Component {...pageProps} />;
};

export default MyApp;
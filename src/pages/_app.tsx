import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {redirectDomain} from "@/app/utils/redirect";

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
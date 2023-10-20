import Section from "@/components/layouts/section";
import {Metadata} from 'next';
import React from "react";

export const metadata: Metadata = {
    title: 'Pages Not Found'
}

const NotFoundPage: React.FC = () => {
    const title = `ERROR 404`;
    const message = `Oops! That page can't be found.`;

    return (
        <Section name={title} subtitle={[message]}></Section>
    );
}

export default NotFoundPage;
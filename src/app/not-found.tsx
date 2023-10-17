import Section from "@/components/layouts/section";
import {NextPage} from 'next';
import React from "react";
import ErrorPage from "@/app/error";

const NotFoundPage: NextPage = () => {
    const title = `ERROR 404`;
    const message = `Oops! That page can't be found.`;

    return (
        <Section name={title} subtitle={[message]}></Section>
    );
}
export default NotFoundPage;
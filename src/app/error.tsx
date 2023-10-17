'use client'

import Section from "@/components/layouts/section";
import {GetServerSideProps, NextPage} from 'next';
import React from "react";

interface ErrorProps {
    statusCode: number;
}

const ErrorPage: NextPage<ErrorProps> = ({statusCode}) => {
    const title = `ERROR ${statusCode || 'unknown'}`;
    const message = statusCode === 404 ? 'Oops! That page can\'t be found.'
        : `An error ${statusCode || 'unknown'} occurred on ${statusCode ? 'server' : 'client'}`;

    return (
        <Section name={title} subtitle={[message]}></Section>
    );
}

export const getServerSideProps: GetServerSideProps<ErrorProps> = async ({res}) => {
    const statusCode = res ? res.statusCode : 404;
    return {props: {statusCode}};
}

export default ErrorPage;
'use client'

import Section from "@/components/layouts/section";
import React from "react";

interface ErrorProps {
    error: Error & { digest?: string };
}

const ErrorPage: React.FC<ErrorProps> = ({error}) => {
    return (
        <Section name={error.name} subtitle={[error.message]}></Section>
    );
}

export default ErrorPage;
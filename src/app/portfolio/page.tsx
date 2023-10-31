import React from 'react';
import Section from "@/components/layouts/section";
import WorkSection from "@/components/layouts/section-work";
import {Metadata} from "next";
import {WEBSITE_NAME} from "@/data/constant/summary";

export const metadata: Metadata = {
    title: 'Portfolio | ' + WEBSITE_NAME,
    alternates: {
        canonical: 'portfolio'
    },
}

export default function PortfolioPage() {
    return (
        <>
            <Section name="Portfolio" linkHref="portfolio" withBreadcrumbs={true}>
                <WorkSection></WorkSection>
            </Section>
        </>
    );
}
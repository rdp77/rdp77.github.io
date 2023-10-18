import React from 'react';
import Section from "@/components/layouts/section";
import WorkSection from "@/components/layouts/section-work";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Portfolio',
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
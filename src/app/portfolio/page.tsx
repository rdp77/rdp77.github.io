import React from 'react';
import Section from "@/components/layouts/section";
import WorkSection from "@/components/layouts/section_work";

export default function PortfolioPage() {
    return (
        <>
            <Section name="Portfolio" linkHref="portfolio" withBreadcrumbs={true}>
                <WorkSection></WorkSection>
            </Section>
        </>
    );
}
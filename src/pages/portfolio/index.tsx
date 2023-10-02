import React from 'react';
import Layout from "@/app/layout";
import Section from "@/layouts/section";
import WorkSection from "@/layouts/section_work";

export default function PortfolioPage() {
    return <Layout title={"Portfolio"}>
        <Section name="Portfolio" linkHref="portfolio" withBreadcrumbs={true}>
            <WorkSection></WorkSection>
        </Section>
    </Layout>;
}
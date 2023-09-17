import React from 'react';
import Layout from "@/app/layout";
import Section from "@/layouts/section";
import ListSection from "@/layouts/section_line";
import awardsData from "@/app/data/awards";
import certificationData from "@/app/data/certification";

const awardsColumn = {
    title: "Awards",
    items: awardsData,
};

const certificationColumn = {
    title: "Certification",
    items: certificationData,
};

export default function AwardsPage() {
    return <Layout title={"Award & Certification"}>
        <Section name="Awards & Certification" linkHref="awards" withBreadcrumbs={true}>
            <ListSection columns={[awardsColumn]}/>
            <ListSection columns={[certificationColumn]}/>
        </Section>
    </Layout>;
}
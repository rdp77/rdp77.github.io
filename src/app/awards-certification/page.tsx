import React from 'react';
import Section from "@/components/layouts/section";
import ListSection from "@/components/layouts/section-line";
import awardsData from "@/data/awards";
import certificationData from "@/data/certification";
import {Metadata} from "next";

const awardsColumn = {
    title: "Awards",
    items: awardsData,
};

const certificationColumn = {
    title: "Certification",
    items: certificationData,
};

export const metadata: Metadata = {
    title: 'Awards & Certification',
}

export default function AwardsPage() {
    return (
        <>
            <Section name="Awards & Certification" linkHref="awards" withBreadcrumbs={true}>
                <ListSection columns={[awardsColumn]}/>
                <ListSection columns={[certificationColumn]}/>
            </Section>
        </>
    );
}
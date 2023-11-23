import React from 'react';
import Section from "@/components/layouts/section";
import ListSection from "@/components/layouts/section-line";
import awardsData from "@/data/awards";
import certificationData from "@/data/certification";
import {Metadata} from "next";
import {WEBSITE_NAME} from "@/data/constant/summary";
import {WEBSITE_DESCRIPTION} from "@/data/constant/meta-data";
import defaultImage from "@/assets/image/avatar.png";

const awardsColumn = {
    title: "Awards",
    items: awardsData,
};

const certificationColumn = {
    title: "Certification",
    items: certificationData,
};

const pageTitle = 'Awards & Certification | ' + WEBSITE_NAME;

export const metadata: Metadata = {
    title: pageTitle,
    alternates: {
        canonical: 'awards-certification'
    },
    openGraph: {
        type: 'profile',
        firstName: 'Moh Ravi',
        lastName: 'Dwi Putra',
        gender: 'Male',
        username: 'rdp77',
        siteName: WEBSITE_NAME,
        emails: 'hi@ravidwiputra.web.id',
        phoneNumbers: '+6285159997670',
        locale: 'en_US',
        alternateLocale: 'id',
        title: pageTitle,
        description: WEBSITE_DESCRIPTION,
        url: `awards-certification`,
        countryName: 'Indonesia',
        images: defaultImage.src,
    },
}

export default function AwardsPage() {
    return (
        <Section name="Awards & Certification" linkHref="awards-certification" withBreadcrumbs={true}>
            <ListSection columns={[awardsColumn]}/>
            <ListSection columns={[certificationColumn]}/>
        </Section>
    );
}
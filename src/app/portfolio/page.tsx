import React from 'react';
import Section from "@/components/layouts/section";
import WorkSection from "@/components/layouts/section-work";
import {Metadata} from "next";
import {WEBSITE_NAME} from "@/data/constant/summary";
import {WEBSITE_DESCRIPTION} from "@/data/constant/meta-data";
import defaultImage from "@/assets/image/avatar.png";

const pageTitle = 'Portfolio | ' + WEBSITE_NAME;

export const metadata: Metadata = {
    title: pageTitle,
    alternates: {
        canonical: 'portfolio'
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
        url: `portfolio`,
        countryName: 'Indonesia',
        images: defaultImage.src,
    },
}

export default function PortfolioPage() {
    return (
        <Section name="Portfolio" linkHref="portfolio" withBreadcrumbs={true}>
            <WorkSection></WorkSection>
        </Section>
    );
}
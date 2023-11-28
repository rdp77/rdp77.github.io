import React from 'react';
import ContactSection from "@/components/layouts/section-contact";
import Section from "@/components/layouts/section";
import {Metadata} from "next";
import {WEBSITE_NAME} from "@/data/constant/summary";
import {WEBSITE_DESCRIPTION} from "@/data/constant/meta-data";
import defaultImage from "@/assets/image/avatar.png";

const pageTitle = 'Contact | ' + WEBSITE_NAME;

export const metadata: Metadata = {
    title: pageTitle,
    alternates: {
        canonical: 'contact'
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
        url: `contact`,
        countryName: 'Indonesia',
        images: defaultImage.src,
    },
}

export default function ContactPage() {
    return (
        <Section name="Contact" linkHref="contact" withBreadcrumbs={true}>
            <ContactSection></ContactSection>
        </Section>
    );
}
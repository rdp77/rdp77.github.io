import React from 'react';
import ContactSection from "@/components/layouts/section-contact";
import Section from "@/components/layouts/section";
import {Metadata} from "next";
import {WEBSITE_NAME} from "@/data/constant/summary";

export const metadata: Metadata = {
    title: 'Contact | ' + WEBSITE_NAME,
}

export default function ContactPage() {
    return (
        <>
            <Section name="Contact" linkHref="contact" withBreadcrumbs={true}>
                <ContactSection></ContactSection>
            </Section>
        </>
    );
}
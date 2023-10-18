import React from 'react';
import ContactSection from "@/components/layouts/section_contact";
import Section from "@/components/layouts/section";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contact',
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
import React from 'react';
import ContactSection from "@/components/layouts/section_contact";
import Section from "@/components/layouts/section";

export default function ContactPage() {
    return (
        <>
            <Section name="Contact" linkHref="contact" withBreadcrumbs={true}>
                <ContactSection></ContactSection>
            </Section>
        </>
    );
}
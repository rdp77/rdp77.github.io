import React from 'react';
import Layout from "@/app/layout";
import ContactSection from "@/layouts/section_contact";
import Section from "@/layouts/section";

export default function ContactPage() {
    return <Layout title={"Contact"}>
        <Section name="Contact" linkHref="contact" withBreadcrumbs={true}>
            <ContactSection></ContactSection>
        </Section>
    </Layout>;
}
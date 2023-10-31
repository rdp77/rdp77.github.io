import React from 'react';
import Section from "@/components/layouts/section";
import AboutSection from "@/components/layouts/section-about";
import ResumeSection from "@/components/layouts/section-line";
import SkillSection from "@/components/layouts/section-progress";
import ListSkillSection from "@/components/layouts/section-list";
import FocusedSection from "@/components/layouts/section-box";
import experienceData from "@/data/experience";
import educationData from "@/data/education";
import softSkillData from "@/data/soft-skill";
import hardSkillData from "@/data/hard-skill";
import knowledgeData from "@/data/knowledge";
import otherSkillData from "@/data/other-skill";
import focusedData from "@/data/focused";
import {Metadata} from "next";
import {Type} from "@/data/enum/type"
import {WEBSITE_NAME} from "@/data/constant/summary";

const experienceColumn = {
    title: "Experience",
    items: experienceData,
};

const educationColumn = {
    title: "Education",
    items: educationData,
};

export const metadata: Metadata = {
    title: 'Resume | ' + WEBSITE_NAME,
    alternates: {
        canonical: 'resume'
    },
}

export default function ResumePage() {
    return (
        <>
            <Section name="Resume" linkHref="resume" withBreadcrumbs={true}>
                <AboutSection></AboutSection>
                <ResumeSection columns={[educationColumn]}/>
                <ResumeSection columns={[experienceColumn]}/>
                <SkillSection title="Soft Skills" items={softSkillData} type={Type.Dot}></SkillSection>
                <SkillSection title="Hard Skills" items={hardSkillData}></SkillSection>
                <SkillSection title="Other Skills" items={otherSkillData} type={Type.Circle}></SkillSection>
                <ListSkillSection title="Knowledge" items={knowledgeData}></ListSkillSection>
                <FocusedSection title="Focused" items={focusedData}></FocusedSection>
            </Section>
        </>
    );
}
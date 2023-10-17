'use client'

import React from 'react';
import Section from "@/components/layouts/section";
import AboutSection from "@/components/layouts/section_about";
import ResumeSection from "@/components/layouts/section_line";
import SkillSection, {Type} from "@/components/layouts/section_progress";
import ListSkillSection from "@/components/layouts/section_list";
import FocusedSection from "@/components/layouts/section_box";
import experienceData from "@/data/experience";
import educationData from "@/data/education";
import softSkillData from "@/data/soft_skill";
import hardSkillData from "@/data/hard_skill";
import knowledgeData from "@/data/knowledge";
import otherSkillData from "@/data/other_skill";
import focusedData from "@/data/focused";

const experienceColumn = {
    title: "Experience",
    items: experienceData,
};

const educationColumn = {
    title: "Education",
    items: educationData,
};

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
import React from 'react';
import Layout from "@/app/layout";
import Section from "@/layouts/section";
import AboutSection from "@/layouts/section_about";
import ResumeSection from "@/layouts/section_line";
import SkillSection, {Type} from "@/layouts/section_progress";
import ListSkillSection from "@/layouts/section_list";
import FocusedSection from "@/layouts/section_box";
import experienceData from "@/app/data/experience";
import educationData from "@/app/data/education";
import softSkillData from "@/app/data/soft_skill";
import hardSkillData from "@/app/data/hard_skill";
import knowledgeData from "@/app/data/knowledge";
import otherSkillData from "@/app/data/other_skill";
import focusedData from "@/app/data/focused";

const experienceColumn = {
    title: "Experience",
    items: experienceData,
};

const educationColumn = {
    title: "Education",
    items: educationData,
};

export default function ResumePage() {
    return <Layout title={"Resume"}>
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
    </Layout>;
}
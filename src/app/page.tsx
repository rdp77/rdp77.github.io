import {WEBSITE_NAME, WEBSITE_SUBTITLE} from "@/data/constant/summary";
import Section from "@/components/layouts/section";
import {Metadata} from "next";
import {WEBSITE_TITLE} from "@/data/constant/meta-data";

export const metadata: Metadata = {
    title: WEBSITE_TITLE
}
export default function Home() {
    return (
        <Section name={WEBSITE_NAME} subtitle={WEBSITE_SUBTITLE}></Section>
    )
}

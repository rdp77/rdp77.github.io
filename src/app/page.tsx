import {WEBSITE_NAME, WEBSITE_SUBTITLE} from "@/data/constant/summary";
import Section from "@/components/layouts/section";

export default function Home() {
    return (
        <Section name={WEBSITE_NAME} subtitle={WEBSITE_SUBTITLE}></Section>
    )
}

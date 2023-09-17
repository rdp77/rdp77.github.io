import {WEBSITE_NAME, WEBSITE_SUBTITLE} from "@/app/constant/summary";
import Layout from "@/app/layout";
import Section from "@/layouts/section";

export default function Home() {
    return (
        <Layout>
            <Section name={WEBSITE_NAME} subtitle={WEBSITE_SUBTITLE}></Section>
        </Layout>
    )
}

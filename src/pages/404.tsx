import Layout from "@/app/layout";
import Section from "@/layouts/section";

export default function NotFoundPage() {
    const title = "ERROR 404";
    const message = "Oops! That page can't be found.";
    return (
        <Layout>
            <Section name={title} subtitle={[message]}></Section>
        </Layout>
    )
}

import React from "react";
import {useRouter} from "next/router";
import {portfolioData} from "@/app/data/portfolio";
import Section from "@/layouts/section";
import Layout from "@/app/layout";
import NotFoundPage from "@/pages/404";

const PortfolioDetail = () => {
    const router = useRouter();
    const {permalink} = router.query;

    const portfolio =
        portfolioData.find((item) => item.permalink === "/portfolio/" + permalink);

    if (!portfolio) {
        return NotFoundPage();
    }

    return (
        <Layout title={portfolio.title}>
            <Section parentName="Portfolio" linkParent="portfolio" name={portfolio.title} linkHref={portfolio.permalink}
                     withBreadcrumbs={true}></Section>
            {portfolio.content}
        </Layout>
    );
};

export default PortfolioDetail;

import React from "react";
import {portfolioData} from "@/data/portfolio";
import Section from "@/components/layouts/section";
import ErrorPage from "@/app/error";
import {NextPage} from "next";

interface PageProps {
    params: {
        slug: string;
    };
}

const PortfolioDetail: NextPage<PageProps> = ({params}) => {

    const portfolio =
        portfolioData.find((item) => item.permalink === "portfolio/" + params.slug);

    if (!portfolio) {
        return <ErrorPage statusCode={404}/>
    }

    return (
        <>
            <Section parentName="Portfolio" linkParent="portfolio" name={portfolio.title} linkHref={portfolio.permalink}
                     withBreadcrumbs={true}></Section>
            <div className="section blog" data-scroll-target="true">
                <div className="content">
                    <div className="single-post-text">
                        {portfolio.content}
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </>
    );
};

export default PortfolioDetail;

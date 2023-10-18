import React from "react";
import {portfolioData} from "@/data/portfolio";
import Section from "@/components/layouts/section";
import NotFoundPage from "@/app/not-found";

interface PageProps {
    params: {
        slug: string;
    };
}

const PortfolioDetail: React.FC<PageProps> = ({params}) => {

    const portfolio = portfolioData.find((item) => item.permalink === `portfolio/${params.slug}`);

    if (!portfolio) {
       return <NotFoundPage/>
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

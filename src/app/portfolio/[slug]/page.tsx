import React from "react";
import {portfolioData} from "@/data/portfolio";
import Section from "@/components/layouts/section";
import {notFound} from "next/navigation";

type PageProps = {
    params: { slug: string },
}

export async function generateMetadata({params}: PageProps) {
    try {
        const portfolio = portfolioData.find((item) => item.permalink === `portfolio/${params.slug}`);

        if (!portfolio) {
            return {
                title: 'Pages Not Found | Portfolio',
                description: 'Portfolio is Not Found'
            }
        }

        return {
            title: portfolio.title + ' | Portfolio',
            description: portfolio.title,
            alternates: {
                canonical: `portfolio/${params.slug}`
            },
        }
    } catch (error) {
        console.error(error);
        return {
            title: 'Not Found | Portfolio',
            description: 'Portfolio is Not Found'
        }
    }
}

const PortfolioDetail: React.FC<PageProps> = ({params}) => {

    const portfolio = portfolioData.find((item) => item.permalink === `portfolio/${params.slug}`);

    if (!portfolio) {
        return notFound();
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

import React from "react";
import {portfolioData} from "@/data/portfolio";
import Section from "@/components/layouts/section";
import {notFound} from "next/navigation";
import {WEBSITE_NAME} from "@/data/constant/summary";

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
            description: portfolio.description,
            keywords: portfolio.keywords,
            alternates: {
                canonical: `portfolio/${params.slug}`
            },
            openGraph: {
                type: 'article',
                authors: WEBSITE_NAME,
                section: 'portfolio',
                tags: portfolio.category,
                siteName: WEBSITE_NAME,
                title: portfolio.title,
                description: portfolio.description,
                url: `portfolio/${params.slug}`,
                images: portfolio.image.src,
            },
            twitter: {
                card: 'summary_large_image',
                title: portfolio.title,
                description: portfolio.description,
                images: [portfolio.image.src],
            },
            robots: {
                follow: true,
                index: true,
                googleBot: {
                    follow: true,
                    index: true,
                }
            }
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

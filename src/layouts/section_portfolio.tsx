import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';
import React from "react";

interface PortfolioItemProps {
    id: number;
    title: string;
    category: string;
    image: StaticImageData;
    permalink: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({id, category, permalink, title, image}) => {
    return (
        <div key={id} className={`box-item ${category}`}>
            <div className="image">
                <Link href={permalink} className="mouse-hover">
                    <Image src={image} alt={title} width={500} height={500}/>
                    <span className="info">
            <span className="centrize full-width">
              <span className="vertical-center">
                <span className="ion ion-ios-book-outline"></span>
              </span>
            </span>
          </span>
                </Link>
            </div>
            <div className="desc">
                <div className="category">
                    {category.includes(' ') ? category.replace(' ', ' & ') : category}
                </div>
                <Link href={permalink} className="name mouse-hover">
                    {title}
                </Link>
            </div>
        </div>
    );
};

interface PortfolioSectionProps {
    portfolioData: PortfolioItemProps[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({portfolioData}) => {
    return (
        <>
            <div className="box-items">
                {portfolioData.map((item) => (
                    <PortfolioItem
                        key={item.id}
                        id={item.id}
                        category={item.category}
                        permalink={item.permalink}
                        title={item.title}
                        image={item.image}
                    />
                ))}
            </div>
        </>
    );
};

export default PortfolioSection;

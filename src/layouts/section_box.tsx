import React from "react";

interface item {
    icon: string;
    name: string;
    description: React.ReactNode;
}

interface BoxSectionProps {
    title: string;
    items: item[];
}

const BoxSection: React.FC<BoxSectionProps> = ({title, items}) => {
    return (
        <div className="section service">
            <div className="content">
                <div className="title">
                    <div className="title_inner">{title}</div>
                </div>
                <div className="service-items">
                    {items.map((item, index) => (
                        <div className="service-item" key={item.name}>
                            <div className="icon"><span className={item.icon}></span></div>
                            <div className="name">{item.name}</div>
                            {item.description}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BoxSection;

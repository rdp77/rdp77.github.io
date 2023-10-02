import React from "react";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface item {
    icon: IconDefinition;
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
                            <div className="icon"><FontAwesomeIcon icon={item.icon} size={"sm"}
                                                                   style={{verticalAlign: "unset"}}/></div>
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

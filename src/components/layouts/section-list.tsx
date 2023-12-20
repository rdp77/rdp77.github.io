import React from "react";

interface ListSectionProps {
    title: string;
    items: {
        name: string
    }[];
}

const ListSection: React.FC<ListSectionProps> = ({title, items}) => {
    return (
        <div className="section skills">
            <div className="content">
                <div className="title">
                    <div className="title_inner">{title}</div>
                </div>
                <div className="skills list">
                    <ul>
                        {items.map((item, index) => (
                            <li key={item.name}>
                                <div className="name">{item.name}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ListSection;

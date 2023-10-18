import React from "react";

interface ResumeItem {
    id: number;
    title: string;
    name: string;
    desc: string;
}

interface ColumnProps {
    title: string;
    items: ResumeItem[];
}

interface ResumeSectionProps {
    columns: ColumnProps[];
}

const ResumeSection: React.FC<ResumeSectionProps> = ({columns}) => {
    let slicedColumns = columns.slice(0, 2);
    const isOneColumn = slicedColumns.length == 1;

    if (isOneColumn) {
        const singleColumn = slicedColumns[0];
        const halfLength = Math.ceil(singleColumn.items.length / 2);

        const firstHalf = singleColumn.items.slice(0, halfLength);
        const secondHalf = singleColumn.items.slice(halfLength);

        slicedColumns = [
            {
                ...singleColumn,
                items: firstHalf,
            },
            {
                title: "",
                items: secondHalf,
            },
        ];
    }

    return (
        <div className="section resume" data-scroll-target="true">
            <div className="content">
                <div className="cols">
                    {slicedColumns.map((column, index) => (
                        <div className="col col-md" key={column.title}>
                            <div className="title">
                                <div className="title_inner">{column.title}</div>
                            </div>
                            <div className="resume-items">
                                {column.items.map((item, itemIndex) => (
                                    <div className="resume-item" key={item.id}>
                                        <div className="date">{item.title}</div>
                                        <div className="name">{item.name}</div>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResumeSection;

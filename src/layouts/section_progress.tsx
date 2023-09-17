import React, {useEffect} from "react";

interface item {
    name: string;
    percentage: number;
}

export enum Type {
    Progress = "progress",
    Dot = "dotted",
    Circle = "circle",
}

interface CircleSectionProps {
    title: string;
    type?: Type;
    items: item[];
}

const CircleSection: React.FC<CircleSectionProps> = ({title, items, type = Type.Progress}) => {
    let classNameType;
    switch (type) {
        case Type.Dot:
            classNameType = "skills dotted";
            break;
        case Type.Circle:
            classNameType = "skills circles";
            break;
        default:
            classNameType = "skills";
            break;
    }

    useEffect(() => {
        if (type === Type.Dot) {
            const skillsDottedList = document.querySelectorAll(".skills.dotted .progress") as NodeListOf<HTMLElement>;
            skillsDottedList.forEach((skillsDotted) => {
                const skillsDottedWidth = skillsDotted.offsetWidth;
                const dgSpan = document.createElement("span");
                dgSpan.classList.add("dg");
                for (let i = 0; i < 10; i++) {
                    const span = document.createElement("span");
                    dgSpan.appendChild(span);
                }
                skillsDotted.appendChild(dgSpan);

                const daSpan = document.createElement("span");
                daSpan.classList.add("da");
                for (let i = 0; i < 10; i++) {
                    const span = document.createElement("span");
                    daSpan.appendChild(span);
                }
                skillsDotted.querySelector(".percentage")?.appendChild(daSpan);

                const percentageDa = skillsDotted.querySelector(".percentage .da") as HTMLElement;
                if (percentageDa) {
                    percentageDa.style.width = skillsDottedWidth + "px";
                }
            });
        } else if (type === Type.Circle) {
            const skillsCirclesList = document.querySelectorAll(".skills.circles .progress") as NodeListOf<HTMLElement>;
            skillsCirclesList.forEach((skillsCircles) => {
                const sliceDiv = document.createElement("div");
                sliceDiv.classList.add("slice");
                const barDiv = document.createElement("div");
                barDiv.classList.add("bar");
                const fillDiv = document.createElement("div");
                fillDiv.classList.add("fill");
                sliceDiv.appendChild(barDiv);
                sliceDiv.appendChild(fillDiv);
                skillsCircles.appendChild(sliceDiv);
            });
        }
    }, [type]);

    return (
        <div className="section skills">
            <div className="content">
                <div className="title">
                    <div className="title_inner">{title}</div>
                </div>
                <div className={classNameType}>
                    <ul>
                        {items.map((item, index) => (
                            <li key={item.name}>
                                <div className="name">{item.name}</div>
                                <div className={"progress " + (type === Type.Circle ? "p" + item.percentage : "")}>
                                    <div className="percentage" style={{width: `${item.percentage}%`}}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CircleSection;

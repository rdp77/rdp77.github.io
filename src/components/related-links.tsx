import React from "react";
import {RELATED_LINKS} from "@/data/constant/summary";
import ButtonIcon from "@/components/button-icon";

const RelatedLinks: React.FC = () => {
    return (
        <>
            <div className="soc">
                {RELATED_LINKS.map((item) => (
                    <ButtonIcon key={item.link} link={item.link} icon={item.icon} label={item.label}/>
                ))}
            </div>
        </>
    );
};

export default RelatedLinks;
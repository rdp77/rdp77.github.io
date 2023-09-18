import React from "react";
import {RELATED_LINKS} from "@/app/constant/summary";
import ButtonIcon from "@/components/button_icon";

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
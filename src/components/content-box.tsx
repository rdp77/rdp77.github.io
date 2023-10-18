import React from "react";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ContentBoxProps {
    icon: IconDefinition;
    name: string;
    linkHref: string;
    linkText: string;
}

const ContentBox: React.FC<ContentBoxProps> = (
    {icon, name, linkHref, linkText,}) => {
    return (
        <div className="service-item content-box">
            <div className="icon">
                <FontAwesomeIcon icon={icon} size={"sm"} fixedWidth style={{verticalAlign:'top',paddingRight:'10px'}}/>
            </div>
            <div className="name">
                <span>{name}</span>
            </div>
            <div className="text single-post-text">
                <div>
                    <p>
                        <a href={linkHref} className="link">
                            {linkText}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContentBox;

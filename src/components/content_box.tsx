import React from "react";

interface ContentBoxProps {
    iconClass: string;
    name: string;
    linkHref: string;
    linkText: string;
}

const ContentBox: React.FC<ContentBoxProps> = (
    {iconClass, name, linkHref, linkText,}) => {
    return (
        <div className="service-item content-box">
            <div className="icon">
                <i className={iconClass}></i>
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

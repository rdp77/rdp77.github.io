'use client'

import React, {useEffect, useState} from "react";
import TypedText from "@/components/typed";
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Breadcrumb from "@/components/breadcrumb";

interface ContentBoxProps {
    parentName?: string;
    linkParent?: string,
    name: string;
    subtitle?: string[];
    linkHref?: string;
    withBreadcrumbs?: boolean;
    children?: React.ReactNode;
}

const Section: React.FC<ContentBoxProps> = (
    {parentName, linkParent, name, linkHref, withBreadcrumbs = false, subtitle = [], children}) => {
    const [showMouseBtn, setShowMouseBtn] = useState(true);
    const [sectionHeight, setSectionHeight] = useState<number>(0);

    useEffect(() => {
        /* Resize function */
        const handleResize = () => {
            const height = window.innerHeight - 60;
            setSectionHeight(height);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        const handleScroll = () => {
            if (window.scrollY >= 1) {
                setShowMouseBtn(false);
            } else {
                setShowMouseBtn(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMouseBtnClick = () => {
        const sectionElement = document.querySelector("[data-scroll-target='true']") as HTMLElement;

        if (sectionElement) {
            const height = sectionElement.offsetTop - 150;
            window.scrollTo({
                top: height,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <div className="section started" style={{height: `${sectionHeight}px`}}>
                <div className="centrize full-width">
                    <div className="vertical-center">
                        <div className="started-content">
                            <h1 className="h-title glitch-effect" data-text={name}>
                                {name}
                            </h1>
                            {withBreadcrumbs ?
                                <Breadcrumb name={name} linkHref={linkHref} linkParent={linkParent}
                                            parentName={parentName}/> : (
                                    <div className="h-subtitle typing-subtitle">
                                        <TypedText texts={subtitle}/>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
                {withBreadcrumbs && showMouseBtn && (
                    <a role="button" className="mouse-btn" onClick={handleMouseBtnClick} aria-label="Scroll Down">
                        <FontAwesomeIcon className={"ion"} icon={faAngleDoubleDown} size={"xs"}/>
                    </a>
                )}
            </div>
            {children}
        </>
    )
        ;
};

export default Section;

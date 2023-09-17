import React, {useEffect, useState} from "react";
import Link from "next/link";
import TypedText from "@/components/typed";

interface ContentBoxProps {
    name: string;
    subtitle?: string[];
    linkHref?: string;
    withBreadcrumbs?: boolean;
    children?: React.ReactNode;
}

const Section: React.FC<ContentBoxProps> = (
    {name, linkHref, withBreadcrumbs = false, subtitle = [], children}) => {
    const formattedLinkHref = "/" + linkHref;
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
        <div className="section started" style={{ height: `${sectionHeight}px` }}>
            <div className="centrize full-width">
                <div className="vertical-center">
                    <div className="started-content">
                        <div className="h-title glitch-effect" data-text={name}>
                            {name}
                        </div>
                        {withBreadcrumbs ? (
                            <>
                                <div className="h-subtitle typing-bread">
                                    <p>
                                        <Link href="/">Home</Link> /{" "}
                                        {linkHref && <Link href={formattedLinkHref}>{name}</Link>}
                                    </p>
                                </div>
                                <span className="typed-bread link"></span>
                            </>
                        ) : (
                            <div className="h-subtitle typing-subtitle">
                                <TypedText texts={subtitle}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {withBreadcrumbs && showMouseBtn && (
                <a role="button" className="mouse-btn" onClick={handleMouseBtnClick}>
                    <span className="ion ion-mouse"></span>
                </a>
            )}
        </div>
        {children}
    </>
)
    ;
};

export default Section;

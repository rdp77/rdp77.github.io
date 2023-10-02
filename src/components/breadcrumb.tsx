import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
    parentName?: string | null;
    linkParent?: string | null;
    linkHref?: string | null;
    name: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({parentName, linkParent, linkHref, name}) => {
    const formattedLinkHref = linkHref ? `/${linkHref}` : "/";
    const formattedLinkParent = `/${linkParent}`

    return (
        <div className="h-subtitle typing-bread">
            <p>
                <Link href="/">Home</Link> /{" "}
                {parentName != null && (
                    <>
                        <Link href={formattedLinkParent}>{parentName}</Link> /{" "}
                    </>
                )}
                {linkHref && <Link href={formattedLinkHref}>{name}</Link>}
            </p>
        </div>
    );
};

export default Breadcrumb;
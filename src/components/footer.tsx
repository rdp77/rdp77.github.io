import React from "react";
import {WEBSITE_SLOGAN} from "@/app/constant/summary";
import RelatedLinks from "@/components/related_links";

export default function Footer() {
    return (
        <footer>
            <RelatedLinks></RelatedLinks>
            <span className="copy">{WEBSITE_SLOGAN}</span>
            <div className="clr"></div>
        </footer>
    );
}
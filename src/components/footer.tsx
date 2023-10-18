import React from "react";
import {WEBSITE_SLOGAN} from "@/data/constant/summary";
import RelatedLinks from "@/components/related-links";

export default function Footer() {
    return (
        <footer>
            <RelatedLinks></RelatedLinks>
            <span className="copy">{WEBSITE_SLOGAN}</span>
            <div className="clr"></div>
        </footer>
    );
}
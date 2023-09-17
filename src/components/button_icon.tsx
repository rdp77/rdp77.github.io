import React from "react";
import Link from "next/link";
import {usePathname} from 'next/navigation';
import {WEBSITE_SLOGAN} from "@/app/constant/summary";

interface ButtonIconProps {
    autoOpen?: boolean;
    rel?: string;
    link: string;
    icon: string
}

const ButtonIcon: React.FC<ButtonIconProps> = ({autoOpen = true, rel = "noopener", link, icon,}) => {
    const target = autoOpen ? "_blank" : "_self";

    return (
        <a href={link} target={target} rel={rel}>
            <span className={icon}></span>
        </a>
    );
};

export default ButtonIcon;
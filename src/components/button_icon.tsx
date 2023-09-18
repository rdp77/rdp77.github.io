import React from "react";
import Link from "next/link";

interface ButtonIconProps {
    autoOpen?: boolean;
    rel?: string;
    label: string;
    link: string;
    icon: string
}

const ButtonIcon: React.FC<ButtonIconProps> = ({autoOpen = true, rel = "noopener", label, link, icon,}) => {
    const target = autoOpen ? "_blank" : "_self";

    return (
        <Link href={link} target={target} rel={rel} aria-label={label}>
            <span className={icon}></span>
        </Link>
    );
};

export default ButtonIcon;
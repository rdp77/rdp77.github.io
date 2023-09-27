import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface ButtonIconProps {
    autoOpen?: boolean;
    rel?: string;
    label: string;
    link: string;
    icon: IconDefinition;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({autoOpen = true, rel = "noopener", label, link, icon,}) => {
    const target = autoOpen ? "_blank" : "_self";

    return (
        <Link href={link} target={target} rel={rel} aria-label={label}>
            <FontAwesomeIcon icon={icon} size={"lg"} fixedWidth style={{verticalAlign:'unset'}}/>
        </Link>
    );
};

export default ButtonIcon;
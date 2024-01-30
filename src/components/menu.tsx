'use client'

import React, {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from 'next/navigation';
import {menuData} from "@/data/menu";

function MenuItem({href, title, button = false}: {
    href: string,
    title: string,
    button?: boolean
}) {
    const pathname = usePathname();
    const isActive = pathname === href;
    let customClass = button ? 'btn' : '';
    if (isActive) {
        customClass += ' active';
    }

    return (
        <li itemProp="name">
            <Link href={href} className={customClass} itemProp={"name"}>{title}</Link>
        </li>
    );
}

export default function Menu() {
    const [mobileMenu, setIsActiveMobile] = useState(false);

    useEffect(() => {
        const headerElement = document.querySelector('header');
        if (headerElement) {
            headerElement.classList.toggle('active', mobileMenu);
            document.body.classList.toggle('loaded', !mobileMenu);
        }
    }, [mobileMenu]);

    const toggleMenu = () => {
        setIsActiveMobile((prevIsActive) => !prevIsActive);
    };

    const renderNavigationList = () => {
        return menuData.map((navigation) => (
            <MenuItem key={navigation.name} href={navigation.url} title={navigation.name} button={navigation.button}/>
        ));
    };

    return (
        <header>
            <div className="head-top">
                <div className={`menu-btn ${mobileMenu ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                </div>
                <div className="top-menu">
                    <ul itemScope itemType="https://www.schema.org/SiteNavigationElement">
                        {renderNavigationList()}
                    </ul>
                </div>
            </div>
        </header>
    );
}
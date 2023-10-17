'use client'

import React, { useEffect } from 'react';

const Cursor: React.FC = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor') as HTMLElement;

        const handleMouseMove = (e: MouseEvent) => {
            cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
            cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
        };

        const handleMouseEnter = () => {
            cursor.style.opacity = '1';
        };

        const handleMouseLeave = () => {
            cursor.style.opacity = '0';
        };

        const handleLinkMouseEnter = () => {
            cursor.style.transform = 'scale(3.2)';
        };

        const handleLinkMouseLeave = () => {
            cursor.style.transform = 'scale(1)';
        };

        const handleMouseDown = () => {
            cursor.style.transform = 'scale(.2)';
        };

        const handleMouseUp = () => {
            cursor.style.transform = 'scale(1)';
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        document.querySelectorAll('[href]').forEach((element) => {
            element.addEventListener('mouseenter', handleLinkMouseEnter);
            element.addEventListener('mouseleave', handleLinkMouseLeave);
        });
        document.querySelectorAll('.mouse-hover').forEach((element) => {
            element.addEventListener('mouseenter', handleLinkMouseEnter);
            element.addEventListener('mouseleave', handleLinkMouseLeave);
        });
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        const handleWindowWidth = () => {
            const width = window.innerWidth;
            if (width < 840) {
                const height = window.innerHeight;
                document.querySelector('.section.started')?.setAttribute('style', `height: ${height - 30}px`);
                cursor.style.opacity = '0';
                cursor.style.display = 'none';
            } else {
                cursor.style.opacity = '1';
                cursor.style.display = 'unset';
            }
        };

        handleWindowWidth();
        window.addEventListener('resize', handleWindowWidth);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            document.querySelectorAll('[href]').forEach((element) => {
                element.removeEventListener('mouseenter', handleLinkMouseEnter);
                element.removeEventListener('mouseleave', handleLinkMouseLeave);
            });
            document.querySelectorAll('.mouse-hover').forEach((element) => {
                element.removeEventListener('mouseenter', handleLinkMouseEnter);
                element.removeEventListener('mouseleave', handleLinkMouseLeave);
            });
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('resize', handleWindowWidth);
        };
    }, []);

    return <div className="cursor"></div>;
};

export default Cursor;

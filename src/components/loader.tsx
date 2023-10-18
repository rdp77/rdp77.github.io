'use client'

import {useEffect, useRef} from 'react';
import TypedText from '@/components/typed';
import {usePathname} from 'next/navigation';
import {TEXT_LOADING} from '@/data/constant/summary';

const Loader = () => {
    const preloaderInnerRef = useRef<HTMLDivElement>(null);
    const cursorElementRef = useRef<HTMLDivElement>(null);
    const pathName = usePathname() ?? '/';

    useEffect(() => {
        const preloaderInner = preloaderInnerRef.current;
        const cursorElement = cursorElementRef.current;

        if (cursorElement) {
            cursorElement.style.display = 'none';
        }

        const timeoutId = setTimeout(() => {
            fadeOut(preloaderInner!, 500, () => {
                /* Preload hide */
                const preloader = document.querySelector('.preloader') as HTMLElement;
                if (preloader) {
                    preloader.style.display = 'none';
                }
                document.body.classList.add('loaded');
                document.body.style.overflow = pathName !== '/' ? 'visible' : 'hidden';
                if (cursorElement) {
                    cursorElement.style.display = 'unset';
                }
            });
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [pathName]);

    function fadeOut(element: HTMLElement, duration: number, callback: () => void) {
        let opacity = 1;
        let startTime: number | null = null;

        function fade(currentTime: number) {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - (startTime as number);
            opacity = 1 - elapsedTime / duration;
            element.style.opacity = opacity.toString();

            if (opacity <= 0) {
                callback();
            } else {
                requestAnimationFrame(fade);
            }
        }

        requestAnimationFrame(fade);
    }

    return (
        <div className="preloader">
            <div className="centrize full-width">
                <div className="vertical-center">
                    <div className="pre-inner" ref={preloaderInnerRef}>
                        <div className="load">
                            <TypedText texts={[TEXT_LOADING]} loader={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
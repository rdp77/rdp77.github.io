import React, {useEffect, useRef} from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
    texts: string[];
    typeSpeed?: number;
    loop?: boolean;
    loader?: boolean
}

export default function TypedText({texts, loop = true, loader = false}: TypedTextProps) {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const options = {
            strings: texts,
            typeSpeed: loader ? 20 : 50,
            loop,
            backSpeed: loader ? 20 : 50,
            smartBackspace: true,
            shuffle: false,
            backDelay: 1000,
            fadeOut: false,
        };

        const typed = new Typed(typedRef.current!, options);

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [loader, loop, texts]);

    return <span ref={typedRef}></span>;
}

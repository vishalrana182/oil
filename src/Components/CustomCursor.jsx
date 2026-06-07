import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Use GSAP's quickTo for high performance tracking
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.5, ease: "power3.out" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.5, ease: "power3.out" });

        const onMouseMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-12 h-12 border-2 border-[#ce6400] bg-transparent rounded-full pointer-events-none z-10000 -ml-6 -mt-6"
        />
    );
};

export default CustomCursor;

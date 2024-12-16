// Core component that receives mouse positions and renders pointer and content

import React, { useEffect, useState } from "react";

import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "./../../lib/utils";
import { ArrowRight } from "lucide-react";

export const FollowerPointerCard = ({
    children,
    className,
    title
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const ref = React.useRef(null);
    const [rect, setRect] = useState(null);
    const [isInside, setIsInside] = useState(false); // Add this line

    useEffect(() => {
        if (ref.current) {
            setRect(ref.current.getBoundingClientRect());
        }
    }, []);

    const handleMouseMove = (e) => {
        if (rect) {
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;
            x.set(e.clientX - rect.left + scrollX);
            y.set(e.clientY - rect.top + scrollY);
        }
    };
    const handleMouseLeave = () => {
        setIsInside(false);
    };

    const handleMouseEnter = () => {
        setIsInside(true);
    };
    return (
        (<div
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            style={{
                cursor: "none",
            }}
            ref={ref}
            className={cn("relative", className)}>
            <AnimatePresence>
                {isInside && <FollowPointer x={x} y={y} title={title} />}
            </AnimatePresence>
            {children}
        </div>)
    );
};

export const FollowPointer = ({
    x,
    y,
    title
}) => {
    return (
        (<motion.div
            className="h-4 w-4 rounded-full absolute z-50"
            style={{
                top: y,
                left: x,
                pointerEvents: "none",
            }}
            initial={{
                scale: 1,
                opacity: 1,
            }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}>
            <div className="rounded-full bg-primary flex flex-col gap-y-2 justify-center items-center text-black font-semibold w-40 h-40 text-center">
                <ArrowRight className='-rotate-45' />
                <p>Let's Discuss Your Idea</p>
            </div>
        </motion.div>)
    );
};

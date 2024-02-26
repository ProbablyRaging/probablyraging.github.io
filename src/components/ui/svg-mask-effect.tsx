"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export const MaskContainer = ({
    children,
    revealText,
    size = 10,
    revealSize = 600,
    className,
}: {
    children?: string | React.ReactNode;
    revealText?: string | React.ReactNode;
    size?: number;
    revealSize?: number;
    className?: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
    const containerRef = useRef<any>(null);
    const updateMousePosition = (e: any) => {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    useEffect(() => {
        containerRef.current.addEventListener("mousemove", updateMousePosition);
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener(
                    "mousemove",
                    updateMousePosition
                );
            }
        };
    }, []);
    let maskSize = isHovered ? revealSize : size;

    const main = [
        {
            text: `Hey,`
        },
        {
            text: "I'm",
        },
        {
            text: "ProbablyRaging",
            className: "text-black dark:text-black",
        }
    ];

    return (
        <React.Fragment>
            <motion.div
                ref={containerRef}
                className={cn("h-screen relative", className)}
                animate={{
                    backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
                }}
            >
                <motion.div
                    className="w-full h-full flex items-center justify-center text-6xl absolute bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
                    animate={{
                        WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2
                            }px`,
                        WebkitMaskSize: `${maskSize}px`,
                    }}
                    transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
                >
                    <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
                    <div
                        onMouseEnter={() => {
                            setIsHovered(true);
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false);
                        }}
                        className="max-w-4xl mx-auto text-center text-white text-4xl font-bold relative z-20"
                    >
                        {children}
                    </div>
                </motion.div>

                <div className="w-full h-full flex items-center justify-center bg-[#2fcdcd] text-white">
                    <div className='flex flex-col gap=0'>
                        <div className="max-w-4xl m-0 text-white text-center text-4xl font-bold">
                            {/* Hey, I'm <span className={isHovered ? '' : 'text-black'}>ProbablyRaging</span>. */}
                            <TypewriterEffectSmooth cursorClassName='h-[48px]' words={main} />
                        </div>
                        <motion.p className="text-[18px] m-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}>
                            Hobbyist Developer
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </React.Fragment>
    );
};

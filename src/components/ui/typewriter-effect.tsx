import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({ words, className, cursorClassName, }: { words: { text: string; className?: string; }[]; className?: string; cursorClassName?: string; }) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const renderWords = () => {
        return (
            <React.Fragment>
                <div>
                    {wordsArray.map((word, idx) => {
                        return (
                            <div key={`word-${idx}`} className="inline-block mr-1">
                                {word.text.map((char, index) => (
                                    <span
                                        key={`char-${index}`}
                                        className={cn(`dark:text-white text-black `, word.className)}
                                    >
                                        {char}
                                    </span>
                                ))}
                                &nbsp;
                            </div>
                        );
                    })}
                </div>
            </React.Fragment>
        );
    };

    return (
        <div className={cn("flex space-x-1 h-12", className)}>
            <motion.div
                className="overflow-hidden "
                initial={{
                    width: "0%",
                }}
                whileInView={{
                    width: "fit-content",
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 0.3,
                }}
            >
                <div
                    className="text-md sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold h-10"
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    {renderWords()}{" "}
                </div>{" "}
            </motion.div>
        </div>
    );
};

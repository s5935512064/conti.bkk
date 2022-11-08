import { useRouter } from "next/router";
import React, { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    text: string;
    textSize: string;
    textColor: string;
}

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

const AnimatedTextCharacter: FC<Props> = ({
    text,
    textSize,
    textColor,
}): JSX.Element => {

    const controls = useAnimation();
    const letters = Array.from(text);
    const ref = useRef(null);
    const isInView = useInView(ref);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }

        console.log("Element is in view: ", isInView);
    }, [isInView, controls]);

    return (
        <>
            <motion.div
                ref={ref}
                style={{
                    overflow: "hidden",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    fontSize: textSize,
                    color: textColor,
                }}
                variants={container}
                initial="hidden"
                animate={controls}
                className="text-6xl tracking-wider font-medium font-serif text-white drop-shadow uppercase px-10 gap-y-2"
            >
                {letters.map((letter, index) => (
                    <motion.span variants={child} key={index}>
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.div>
        </>
    );
};

export default AnimatedTextCharacter;
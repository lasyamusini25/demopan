"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
} as const;

interface SwipeCarouselProps {
    images: string[];
}

export const SwipeCarousel = ({ images }: SwipeCarouselProps) => {
    const [imgIndex, setImgIndex] = useState(0);

    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((pv) => {
                    if (pv === images.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, [images.length, dragX]);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    return (
        <div className="relative overflow-hidden bg-neutral-950 py-12 rounded-2xl">
            <motion.div
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                style={{
                    x: dragX,
                }}
                animate={{
                    translateX: `-${imgIndex * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
                className="flex w-full cursor-grab items-center active:cursor-grabbing"
            >
                <Images images={images} imgIndex={imgIndex} />
            </motion.div>

            <Dots images={images} imgIndex={imgIndex} setImgIndex={setImgIndex} />
            <GradientEdges />
        </div>
    );
};

const Images = ({ images, imgIndex }: { images: string[]; imgIndex: number }) => {
    return (
        <>
            {images.map((imgSrc, idx) => {
                return (
                    <motion.div
                        key={idx}
                        animate={{
                            scale: imgIndex === idx ? 0.95 : 0.85,
                        }}
                        transition={SPRING_OPTIONS}
                        className="w-full h-[40vh] min-h-[300px] max-h-[500px] shrink-0 rounded-xl bg-neutral-800 relative overflow-hidden"
                    >
                        <Image
                            src={imgSrc}
                            alt={`Gallery image ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                    </motion.div>
                );
            })}
        </>
    );
};

const Dots = ({ images, imgIndex, setImgIndex }: { images: string[]; imgIndex: number; setImgIndex: React.Dispatch<React.SetStateAction<number>> }) => {
    return (
        <div className="mt-6 flex w-full justify-center gap-2">
            {images.map((_, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => setImgIndex(idx)}
                        style={{
                            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        className={`h-2 rounded-full ${idx === imgIndex ? "bg-[#ee2e22] w-8" : "bg-neutral-600 w-2 hover:bg-neutral-400"
                            }`}
                    />
                );
            })}
        </div>
    );
};

const GradientEdges = () => {
    return (
        <>
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
        </>
    );
};

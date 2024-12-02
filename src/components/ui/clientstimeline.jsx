import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const ClientsTimeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0%", "end 100%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    console.log(height);

    return (
        <div
            className="w-full bg-black dark:bg-neutral-950 font-sans md:px-10 py-40"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-20 text-center">
                <h1 className="text-5xl font-bold text-white">Our clients simply love <span className="text-primary"> what we do.</span></h1>
                <p className="text-lg text-white mt-10 mx-40">
                    Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
                </p>
                <div className="flex items-center justify-center space-x-6 mt-12">
                    <img src="/images/reviews1.svg" alt="" />
                    <img src="/images/reviews2.svg" alt="" />
                </div>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto flex">
                <div>
                    {data.map((item, index) => {
                        // Create a ref for each card
                        const cardRef = useRef(null);
                        // Get the scroll position for the current card
                        const { scrollYProgress: cardScrollY } = useScroll({
                            target: cardRef,
                            offset: ["start 50%", "end 100%"],
                        });

                        // Transform the scale based on the scroll progress for each card
                        const scaleTransform = useTransform(cardScrollY, [0, 1], [0.9, 1]); // From 0.8 to 1

                        return (
                            <motion.div
                                key={index}
                                className="space-y-6 md:gap-10 mb-10 mx-14 border rounded-3xl border-gray-700 p-16 text-white transition-all duration-500"
                                ref={cardRef}
                                style={{ scale: scaleTransform }}  // Apply scale transformation here
                            >
                                <p className="text-3xl leading-relaxed">{item.review}</p>

                                <div className="flex items-center gap-x-6">
                                    <div className="bg-primary flex items-center justify-center rounded-full h-20 w-20">
                                        <h1 className="text-3xl text-black">{item.dp}</h1>
                                    </div>

                                    <div>
                                        <p className="text-lg font-semibold">{item.name}</p>
                                        <div className="flex space-x-2 mt-2">
                                            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                        </div>
                                    </div>

                                    <img src={`/images/${item.image}`} className="ml-auto" alt="" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                <div className="sticky md:right-3 right-3 top-60 overflow-hidden w-[18px] h-40 bg-gray-600 rounded-xl">
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 bg-primary rounded-xl"
                    />
                </div>
            </div>

        </div>
    );
};

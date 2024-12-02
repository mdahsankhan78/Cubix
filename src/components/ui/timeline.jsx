import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
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
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black dark:bg-neutral-950 font-sans md:px-10 py-40"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-20">
        <h1 className="text-5xl font-bold text-white">our product</h1>
        <h1 className="text-5xl font-bold text-primary">
          development process.
        </h1>
        <div className="flex items-center group space-x-4 text-white text-xl my-8">
          <p className="group-hover:text-primary transition-all duration-300">
            View More
          </p>
          <FontAwesomeIcon
            className="group-hover:translate-x-4 group-hover:text-primary transition-all duration-300"
            icon={faArrowRight}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-16">
        {/* First column: scrolling content */}
        <div className="col-span-1">

          <div ref={ref} className="relative max-w-7xl mx-auto">
            {data.map((item, index) => (
              <div
                key={index}
                className="space-y-6 md:gap-10 mb-40 pl-20"
              >
                <p className="text-white">{item.index}</p>
                <h1 className="text-5xl font-bold text-primary">{item.title}</h1>
                <p>{item.content}</p>
              </div>
            ))}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute md:left-8 left-8 top-0 overflow-hidden w-[4px] bg-gray-600 h-full"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[4px] bg-white"
              />
            </div>
          </div>
        </div>

        {/* Second column: sticky image container */}
        <div className="col-span-1 relative">
          <div className="sticky top-10 h-screen flex items-center justify-center">
            <div className="rounded-full overflow-hidden w-[25rem] h-[35rem] relative">
              {/* Render the first image separately */}
              <motion.div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <img
                  src={data[0].image}
                  alt={data[0].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Render the rest of the images */}
              {data.slice(1).map((item, index) => {
                // Create scroll range for each image
                const scrollRangeStart = (index + 1) / data.length;
                const scrollRangeEnd = (index + 2) / data.length;

                // Use scrollYProgress to calculate opacity and translateY for each image
                const opacity = useTransform(
                  scrollYProgress,
                  [scrollRangeStart, scrollRangeEnd],
                  [0, 1]
                );
                const translateY = useTransform(
                  scrollYProgress,
                  [scrollRangeStart, scrollRangeEnd],
                  ["100%", "0%"]
                );

                return (
                  <motion.div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
                    style={{
                      translateY,
                      zIndex: 1,
                    }}
                  >
                    {/* Image for each item */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
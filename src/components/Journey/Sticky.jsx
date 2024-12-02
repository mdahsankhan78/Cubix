import React from "react";
import { Timeline } from "../ui/timeline";

export function Sticky() {
  const data = [
    {
      index : '01/06',
      title: "Ideate",
      content: (
          <p
            className="text-white text-lg font-normal">
           We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.
          </p>
         
      ),
      image: "/images/product1.webp"
    },
    {
        index : '02/06',
        title: "Design",
        content: (
            <p
              className="text-white text-lg font-normal">
             Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.
            </p>
           
        ),
        image: "/images/product2.webp"
      },
      {
        index : '03/06',
        title: "Develop",
        content: (
            <p
              className="text-white text-lg font-normal">
             Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.
            </p>
           
        ),
        image: "/images/product3.webp"
      },
      {
        index : '04/06',
        title: "Test",
        content: (
            <p
              className="text-white text-lg font-normal">
           Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.
            </p>
           
        ),
        image: "/images/product4.webp"
      },
      {
        index : '05/06',
        title: "Launch",
        content: (
            <p
              className="text-white text-lg font-normal">
             Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.
            </p>
           
        ),
        image: "/images/product5.webp"
      },
      {
        index : '06/06',
        title: "Support",
        content: (
            <p
              className="text-white text-lg font-normal">
            Providing ongoing support and enhancements to ensure continued product success.
            </p>
           
        ),
        image: "/images/product6.webp"
      },
      
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}

"use client";

import React from "react";
import { useTheme } from "next-themes";

import PageCard from "../_common/PageCard";

import { ticketData } from "./data/data";
import PageImage from "../_common/PageImage";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles/CarouselButtons.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1290, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function TicketCard() {
  const { theme } = useTheme();
  return (
    <div className="w-[80%] m-auto mt-10">
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
      >
        {ticketData.map((item, index) => (
          <PageCard key={index} className="p-5 w-[100%] flex justify-center">
            <div className="bg-white dark:bg-[#3B3E47] min-w-2/4 flex flex-col items-center p-3 shadow-lg relative">
              <div className="flex pb-7 justify-center">
                <PageImage
                  className="w-[80%] shadow-xl"
                  src={item.thumbnail}
                  alt={item.alt}
                />
              </div>
              <div className="min-[320px]:w-[125%] w-[110%] relative flex items-center">
                <span
                  className="w-[12%] h-[4.5vh] rounded-full min-[320px]:top-[53%] lg:top-[68.05%] left-[-6%]"
                  style={{
                    background:
                      theme === "dark"
                        ? "linear-gradient(180deg, rgba(24,40,42,1) 0%, rgba(34,26,44,1) 35%)"
                        : "linear-gradient(90deg, rgba(249,248,255,1) 0%, rgba(243,249,255,1) 35%)",
                    boxShadow: "inset -4px 2px 6px 0 rgba(0, 0, 0, 0.07)",
                  }}
                ></span>
                <span className="w-[100%] h-0 border-dashed border-2"></span>
                <span
                  className="w-[12%] h-[4.5vh] rounded-full min-[320px]:top-[53%] lg:top-[68.05%] right-[-6%]"
                  style={{
                    background:
                      theme === "dark"
                        ? "linear-gradient(180deg, rgba(24,40,42,1) 0%, rgba(34,26,44,1) 35%)"
                        : "linear-gradient(90deg, rgba(249,248,255,1) 0%, rgba(243,249,255,1) 35%)",
                    boxShadow: "inset 4px 2px 6px 0 rgba(0, 0, 0, 0.07)",
                  }}
                ></span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-[17px] font-[500] mt-3">
                  {item.title}
                </span>
                <div>
                  <span className="text-[14px] font-[400]">{item.date}</span>
                  {" | "}
                  <span className="text-[14px] font-[400]">{item.day}</span>
                  {" | "}
                  <span className="text-[14px] font-[400]">{item.time}</span>
                </div>
                <span className="w-[100%] text-center font-[400] text-[14px] text-[#525965] dark:text-[#DFDFDF]">
                  {item.address}
                </span>
                <button className="bg-[#1D1D1F] dark:bg-black w-[100%] text-white pl-7 pr-7 pt-3 pb-3">
                  {item.collectionType}
                </button>
              </div>
            </div>
          </PageCard>
        ))}
      </Carousel>
    </div>
  );
}

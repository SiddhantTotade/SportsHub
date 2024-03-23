"use client";

import React from "react";
import { useTheme } from "next-themes";

import PageCard from "../_common/PageCard";

import { ticketData } from "./data/data";
import PageImage from "../_common/PageImage";

import PageCarousel from "../_common/PageCarousel";

export default function TicketCard() {
  const { theme } = useTheme();
  return (
    <div className="w-[85%] m-auto mt-10">
      <PageCarousel>
        {ticketData.map((item, index) => (
          <PageCard key={index} className="p-5 w-[100%] flex justify-center">
            <div className="lg:w-[80%] md:w-[40%] sm:w-[50%] bg-white dark:bg-[#3B3E47] flex flex-col items-center p-3 shadow-lg relative">
              <div className="flex pb-7 justify-center">
                <PageImage
                  className="lg:w-100%] shadow-xl"
                  src={item.thumbnail}
                  alt={item.alt}
                />
              </div>
              <div className="min-[320px]:w-[125%] w-[110%] relative flex items-center">
                <span
                  className="w-[15%] h-[5vh] rounded-full min-[320px]:top-[53%] lg:top-[68.05%]"
                  style={{
                    background:
                      theme === "dark"
                        ? "linear-gradient(180deg, rgba(24,40,42,1) 0%, rgba(34,26,44,1) 35%)"
                        : "linear-gradient(90deg, rgba(249,248,255,1) 0%, rgba(243,249,255,1) 35%)",
                    boxShadow: "inset -6px 2px 6px 0 rgba(0, 0, 0, 0.07)",
                  }}
                ></span>
                <span className="w-[100%] h-0 border-dashed border-2"></span>
                <span
                  className="w-[15%] h-[5vh] rounded-full min-[320px]:top-[53%] lg:top-[68.05%]"
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
      </PageCarousel>
    </div>
  );
}

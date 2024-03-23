import React from "react";

import PageCard from "../_common/PageCard";
import PageImage from "../_common/PageImage";

import { playerData } from "./data/data";

export default function SportCard() {
  return (
    <div className="grid grid-cols-5 min-[320px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {playerData.map((item, index) => (
        <PageCard
          key={index}
          className="bg-[#FFFFFF] dark:bg-[#3B3E47] shadow-lg p-3 w-full min-w-[35%] flex flex-col gap-2 relative"
        >
          <PageImage
            src={item.thumbnail}
            alt="player_1"
            className="w-full h-full object-cover"
            ad={item.ad}
          />
          {item.content ? (
            <>
              <span className="font-bold text-center text-xl dark:text-[#FFFFFF] text-[#222D3A]">
                {item.title}
              </span>
              <span className="text-[#525965] dark:text-[#DFDFDF] font-[400] text-[12.8px] leading-[19px] text-justify">
                {item.content}
              </span>
            </>
          ) : (
            <>
              <span className="font-[500] text-[17px]">{item.title}</span>
              <div className="flex justify-around bg-[#F7F7F8] dark:bg-[#292B32] rounded-md p-1">
                <div className="flex flex-col">
                  <span className="text-[#525965] dark:text-[#DFDFDF] font-[400] text-[12px]">
                    Total Events
                  </span>
                  <span className="font-[500] text-[14px]">
                    {item.events} Events
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#525965] dark:text-[#DFDFDF] font-[400] text-[12px]">
                    Sport
                  </span>
                  <span className="font-[500] text-[14px]">{item.sport}</span>
                </div>
              </div>
            </>
          )}
        </PageCard>
      ))}
    </div>
  );
}

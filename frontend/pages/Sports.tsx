"use client";

import React from "react";
import SportCard from "../components/sports/SportsCard";
import TicketCard from "../components/collectionSpotlight/TicketCard";
import { useTheme } from "next-themes";

export default function Sports() {
  const { theme } = useTheme();

  return (
    <>
      <section className="flex justify-center">
        <div className="flex flex-col gap-5 min-[320px]:w-[95%]  lg:w-[80%] md:w-[95%] sm:w-[95%]">
          <h2 className="font-bold text-3xl dark:text-[#fff] decoration-[#738FFF] underline underline-offset-4">
            Sports
          </h2>
          <div>
            <SportCard />
          </div>
          <div className="flex justify-center mt-7">
            <button className="pl-7 pr-7 pt-3 pb-3 rounded-md bg-[#2C9CF0] text-white">
              See More
            </button>
          </div>
        </div>
      </section>
      <section className="flex mt-36 items-center min-[400px]:p-5">
        <div
          className="w-[100%] lg:h-[918px] min-[700px]:w-[100%] m-auto p-auto"
          style={{
            background:
              theme === "dark"
                ? "linear-gradient(180deg, rgba(24,40,42,1) 0%, rgba(34,26,44,1) 35%)"
                : "linear-gradient(90deg, rgba(249,248,255,1) 0%, rgba(243,249,255,1) 35%)",
          }}
        >
          <div className="w-[70%] mt-[5rem] m-auto flex flex-col items-center">
            <h1 className="font-[700] text-[50px]">Collection Spotlight</h1>
            <span className="font-[400] text-[14px] text-center">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </span>
          </div>
          <TicketCard />
        </div>
      </section>
    </>
  );
}

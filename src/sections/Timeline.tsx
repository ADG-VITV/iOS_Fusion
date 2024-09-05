"use client";
import { useState, useRef, useEffect } from "react";
import Event from "@/components/Event";
import Slider from "@mui/material/Slider";

export default function Timeline() {
  const [range, setRange] = useState<number>(100);

  const getBackgroundColor = (index: number): string => {
    if (range < 33.33 && index === 3) return "bg-[#5C4AC8]";
    if (range >= 33.33 && range < 66.66 && index === 2) return "bg-[#5C4AC8]";
    if (range >= 66.66 && range <= 99.99 && index === 1) return "bg-[#5C4AC8]";
    if (range == 100 && index === 0) return "bg-[#5C4AC8]";
    return "bg-[#1A1A1A]";
  };

  const handleRangeChange = (event: Event, newValue: number | number[]) => {
    setRange(Array.isArray(newValue) ? newValue[0] : newValue);
  };
  const handleClick = (index: number) => {
    switch (index) {
      case 0:
        setRange(0);
        break;
      case 1:
        setRange(33.33);
        break;
      case 2:
        setRange(66.66);
        break;
      case 3:
        setRange(100);
        break;
      default:
        break;
    }
  };

  return (
    <section
      id="timeline"
      className="px-6 py-8 lg:px-32 lg:py-16 bg-black text-white"
    >
      <h1 className="text-3xl lg:text-5xl font-bold lg:m-4">TIMELINE</h1>
      <div className="flex lg:mx-auto h-full">
        <div className="flex flex-col w-full text-2xl lg:text-5xl gap-8 my-12 items-center font-bold relative">
          <div className="flex w-full justify-between lg:justify-evenly">
            <h1>DAY 1</h1>
            <div className="flex flex-col gap-4 mb-5">
              <Event
                key={0}
                onClick={() => handleClick(3)}
                className={`flex flex-col ${getBackgroundColor(0)}`}
                event="EVENT 1 : IOS FUSION INTRO"
                time="WILL BE ANNOUNCED SOON"
                venue="WILL BE ANNOUNCED SOON"
              />
              <Event
                key={1}
                onClick={() => handleClick(2)}
                className={`flex flex-col ${getBackgroundColor(1)}`}
                event="EVENT 2 : GUEST SPEAKER"
                time="WILL BE ANNOUNCED SOON"
                venue="WILL BE ANNOUNCED SOON"
              />
            </div>
          </div>
          <div className="flex w-full justify-between lg:justify-evenly">
            <h1>DAY 2</h1>
            <div className="flex flex-col gap-4 mb-5">
              <Event
                key={2}
                onClick={() => handleClick(1)}
                className={`flex flex-col ${getBackgroundColor(2)}`}
                event="EVENT 3 : LIVE WORKSHOP"
                time="WILL BE ANNOUNCED SOON"
                venue="WILL BE ANNOUNCED SOON"
              />
              <Event
                key={3}
                onClick={() => handleClick(0)}
                className={`flex flex-col ${getBackgroundColor(3)}`}
                event="EVENT 4 : APPATHON"
                time="WILL BE ANNOUNCED SOON"
                venue="WILL BE ANNOUNCED SOON"
              />
            </div>
            {/* <div className="flex flex-col gap-4">
              <Event
                key={2}
                onClick={() => handleClick(1)}
                className={`flex flex-col ${getBackgroundColor(2)}`}
                event="EVENT 3 : HANDS ON WORKSHOP"
                time="WILL BE ANNOUNCED SOON"
                venue="WILL BE ANNOUNCED SOON"
              />
              <Event
                key={3}
                onClick={() => handleClick(0)}
                className={`flex flex-col ${getBackgroundColor(3)}`}
                event="EVENT 4 : APPATHON"
                time="WILL BE ANNOUNCED SOON"
                venue="WILL BE ANNOUNCED SOON"
              />
            </div> */}
            <div className="h-full flex justify-center items-center absolute top-0 left-[18%] lg:left-[35%] rotate-0">
              <Slider
                value={range}
                onChange={handleRangeChange}
                aria-labelledby="range-slider"
                min={0}
                max={100}
                track="inverted"
                orientation="vertical"
                sx={{
                  width: 8,
                  height: "100%",
                  color: "#5f37b0",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

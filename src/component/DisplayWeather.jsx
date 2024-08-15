import React from "react";
import { FaDroplet } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import TodayWeather from "./widgets/TodayWeather";

const DisplayWeather = ({ data }) => {
  console.log("DisplayWeather data", data);

  return (
    <>
      <div className="flex flex-wrap justify-between">
        <TodayWeather data={data} />
        <div className="w-full sm:w-1/2 lg:w-1/4 min-h-56 p-2">
          <div className="w-full h-full bg-[#1b1b1d] flex flex-col rounded-3xl">
            <div
              className={
                "flex flex-row px-6 py-4 justify-between items-center rounded-tr-3xl rounded-tl-3xl"
              }
            >
              <div className="flex flex-row space-x-2 items-center">
                <FaDroplet className="text-white" />
                <span className="text-white font-medium ">Humudity</span>
              </div>
            </div>

            <div className="flex h-full flex-row items-center justify-center ">
              <span className="text-white font-semibold font-aldrich text-4xl lg:text-[44px] pt-2">
                {data.humidity}%
              </span>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 min-h-56 p-2">
          <div className="w-full h-full bg-[#1b1b1d] flex flex-col rounded-3xl">
            <div
              className={
                "flex flex-row px-6 py-4 justify-between items-center rounded-tr-3xl rounded-tl-3xl"
              }
            >
              <div className="flex flex-row space-x-2 items-center">
                <FaTachometerAlt className="text-white" />
                <span className="text-white font-medium ">Pressure</span>
              </div>
            </div>

            <div className="flex h-full flex-row items-center justify-center ">
              <span className="text-white font-semibold font-aldrich text-center text-3xl lg:text-[34px] pt-2">
                {data.pressure} hPa
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayWeather;

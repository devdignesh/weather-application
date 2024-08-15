import React from "react";
import classNames from "classnames";

const TodayWeather = ({ data, className }) => {
  return (
    <>
      <div className={classNames(`w-full sm:w-1/2 lg:w-1/2 p-2`, className)}>
        <div className="w-full bg-[#bbd7ec] flex flex-col rounded-3xl">
          <div
            className={
              "flex flex-row bg-[#55555518] py-4 px-5 justify-between items-center rounded-tr-3xl rounded-tl-3xl"
            }
          >
            <span className="text-black font-medium">{data.day}</span>
            <span
              className="text-black font-medium"
            >
              11:42 PM
            </span>
          </div>
          <div className="py-4 px-5">
            <div className="flex flex-row items-center justify-between">
              <span className="text-black font-semibold font-aldrich text-5xl lg:text-6xl pt-2">
                {data.current}°
              </span>
              <div className="items-center justify-center flex flex-col  text-center lg:mr-5">
                <img
                  src={`/images/icons/${data.icon}.png`}
                  alt=""
                  className="w-18 h-16 items-center "
                />
                <span className="items-center mt-2 block">
                  {data.condition}
                </span>
              </div>
            </div>
            <div className="mt-5 flex flex-row space-x-2">
              <div>
                <span className="font-inter font-sm font-light text-zinc-500 ">
                  High
                </span>
                <span className="font-aldrich font-sm"> {data.high_temp}°</span>
              </div>

              <div>
                <span className="font-inter font-sm font-light text-zinc-500 ">
                  Low
                </span>
                <span className="font-aldrich font-sm  ">
                  {" "}
                  {data.low_temp}°
                </span>
              </div>
            </div>
            <div className="">
              <span className="font-inter font-sm font-light text-zinc-500 ">
                Real feel
              </span>
              <span className="font-aldrich font-sm  "> {data.real_feel}°</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayWeather;

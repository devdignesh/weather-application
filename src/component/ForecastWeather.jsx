import React from "react";
import TodayWeather from "./widgets/TodayWeather";

const ForecastWeather = ({ data }) => {
  console.log("ForecastWeather data", data);

  return (
    <div className="flex flex-wrap justify-between">
      <TodayWeather data={data.today} className={'lg:w-1/3'}/>

      {data.forecast.map((info, index) => (
        <div className="w-full sm:w-1/2 lg:w-[22%] p-2">
          <div className="w-full h-full bg-[#1b1b1d] flex flex-col rounded-3xl">
            <div
              className={
                "flex flex-col px-6 pt-4 pb-6 h-full justify-between items-center rounded-tr-3xl rounded-tl-3xl"
              }
            >
              <div className="border-b border-zinc-700/50 w-full">
                <span className="text-white text-center font-medium block pb-3">
                  {info.day}
                </span>
              </div>
              <img
                src={`/images/icons/${info.icon}.png`}
                alt=""
                className="w-18 h-16 mt-5 "
              />
              <span className="text-white font-semibold font-aldrich text-4xl lg:text-[42px] pt-2">
                {info.temp}°
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastWeather;

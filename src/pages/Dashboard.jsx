import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";

import OtherCities from "../component/OtherCities";
import useSelectedCityStore from "../store/useSelectedCityStore";
import { fetchCityWeatherData } from "../api/cityWeatherData";
import DisplayWeather from "../component/DisplayWeather";
import ForecastWeather from "../component/ForecastWeather";
import { BarChart } from "@mui/x-charts";
import { LineChart } from "@mui/x-charts/LineChart";

const Dashboard = () => {
  const selectedCity = useSelectedCityStore((state) => state.selectedCity);
  const [cityWeather, setCityWeather] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Today");
  const [chartData, setChartData] = useState({ xAxis: [], series: [] });

  console.log("ChartData", chartData.series);

  console.log("Dashboard selectedCity", selectedCity);
  console.log("Dashboard selectedTab", selectedTab);
  console.log("Dashboard cityWeather", cityWeather);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const data = await fetchCityWeatherData(selectedCity); // Fetch weather data based on selected city
        console.log("Dashboard data", data);
        if (data) {
          setCityWeather(data); // Set city weather data if it exists

          const days = [
            data.today.day,
            data.tomorrow.day,
            ...data.forecast.map((f) => f.day),
          ];
          const temps = [
            data.today.temp,
            data.tomorrow.temp,
            ...data.forecast.map((f) => f.temp),
          ];

          setChartData({
            xAxis: days,
            series: temps,
          });
        } else {
          setCityWeather([]); // If no data, set an empty array
          setChartData({ xAxis: [], series: [] }); // Reset chart data
        }
      } catch (error) {
        console.error("Error fetching city weather data:", error);
        setCityWeather([]); // Set empty array on error
        setChartData({ xAxis: [], series: [] }); // Reset chart data
      }
    };

    if (selectedCity) {
      fetchCityData();
    }
  }, [selectedCity]); // Only run effect when selectedCity changes

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const renderWeatherData = () => {
    if (!cityWeather) {
      return <div>Loading weather data...</div>; // Loading state
    }

    switch (selectedTab) {
      case "Today":
      case "Tomorrow":
        return (
          <DisplayWeather
            data={
              selectedTab === "Today" ? cityWeather.today : cityWeather.tomorrow
            }
          />
        );
      case "Next 3 days":
        return <ForecastWeather data={cityWeather} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Sidebar />
      <div class="xl:ml-72 sm:ml-[75px] bg-[#0c0b0b] font-[Poppins]">
        <div className=" min-h-screen max-w-full pb-10">
          <div className="max-w-full flex flex-row min-h-screen m-auto">
            <div className="flex flex-col w-full">
              <Header />

              <div className="w-full flex flex-wrap px-4 ">
                <div className="w-full lg:flex-1 lg:max-w-[1100px]">
                  <div className="flex space-x-8 mx-2 my-6 ">
                    <span
                      className={` cursor-pointer ${
                        selectedTab === "Today" ? "text-white" : "text-zinc-500"
                      }`}
                      onClick={() => handleTabChange("Today")}
                    >
                      Today
                    </span>
                    <span
                      className={` cursor-pointer ${
                        selectedTab === "Tomorrow"
                          ? "text-white"
                          : "text-zinc-500"
                      }`}
                      onClick={() => handleTabChange("Tomorrow")}
                    >
                      Tomorrow
                    </span>
                    <span
                      className={` cursor-pointer ${
                        selectedTab === "Next 3 days"
                          ? "text-white"
                          : "text-zinc-500"
                      }`}
                      onClick={() => handleTabChange("Next 3 days")}
                    >
                      Next 3 days
                    </span>
                  </div>

                  {renderWeatherData()}
                  <div className="mt-5">
                    <div className="flex flex-wrap">
                      <div className="w-full lg:flex-1 lg:max-w-[1100px]  px-2 mb-6 lg:mb-0 ">
                        <div className="relative bg-[#1b1b1d] p-5 rounded-md overflow-x-scroll">
                          <span className="text-white">Temperatures Graph</span>
 
                            <LineChart
                              xAxis={[{ data: [1,2,3,4,5] }]} // Days of the week
                              series={[
                                {
                                  data: chartData.series, // Temperatures
                                },
                              ]}
                              width={800}
                              height={300}
                            />
                           
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <OtherCities />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

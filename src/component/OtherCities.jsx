import React, { useEffect, useState } from "react";
import CityCard from "./widgets/CityCard";
import useOtherCitiesStore from "../store/useOtherCitiesStore";
import { fetchCityWeatherData } from "../api/cityWeatherData";
import useSelectedCityStore from "../store/useSelectedCityStore";

const OtherCities = () => {
  const { cities } = useOtherCitiesStore();
  const [cityWeather, setCityWeather] = useState([]);


  useEffect(() => {
    const fetchCityData = async () => {
      const weatherData = await Promise.all(
        cities.map(async (city) => {
          try {
            const data = await fetchCityWeatherData(city); // Use the mock API
            console.log("Data=====", data);

            return { ...data };
          } catch (error) {
            console.error(error);
            return null;
          }
        })
      );
      setCityWeather(weatherData.filter((city) => city)); // Filter out any failed fetches
    };

    fetchCityData();
  }, [cities]);

  return (
    <div className="w-full lg:w-[calc(100%-1100px)] lg:min-w-[300px] p-2 lg:pl-4">
      <div className="flex space-x-8 mx-2 my-6 ">
        <span className="text-white cursor-pointer">Other Cities</span>
      </div>
      <div className="w-full flex flex-col space-y-4 ">
        {cityWeather.map((city, index) => (
          <CityCard
            key={index}
            name={city.city.toLowerCase()}
            icon={city.today.icon}
            temperature={city.today.temp}
            weather={city.today.condition}
     
          />
        ))}
      </div>
    </div>
  );
};

export default OtherCities;

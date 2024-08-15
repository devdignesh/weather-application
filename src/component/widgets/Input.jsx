import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import classNames from "classnames";
import useOtherCitiesStore from "../../store/useOtherCitiesStore";
import useSelectedCityStore from "../../store/useSelectedCityStore";
import { fetchCityWeatherData } from "../../api/cityWeatherData";

const Input = ({ className }) => {
  const [inputValue, setInputValue] = useState("");

  const cities = useOtherCitiesStore((state) => state.cities); // Get the list of cities
  const addCity = useOtherCitiesStore((state) => state.addCity); // Add city function
  const [error, setError] = useState(""); // store error message

  const setSelectedCity = useSelectedCityStore(
    (state) => state.setSelectedCity
  );

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {

      
      const cityLower = inputValue.toLowerCase();

      // Check if the city already exists in the store
      if (cities.map(city => city.toLowerCase()).includes(cityLower)) {
        setError(`${inputValue} already exists`);
        return;
      }

      try {
        await fetchCityWeatherData(inputValue);
        addCity(inputValue); // Add city if found
        setSelectedCity(inputValue); // If city exist in database then set to selected(current) city
        setError(""); // Clear error if city is found
        setInputValue(""); // Clear input after city is added
      } catch (error) {
        setError("City not found"); // Set error message if city is not found
      }
    }
  };


  return (
    <div
      className={classNames(
        "w-[550px] ml-2 h-[46px] rounded-full bg-[#1e1e1e]",
        className
      )}
    >
      <div className="justify-start pl-6 items-center flex flex-row h-full">
        <span className="text-white">
          <FiSearch size={20} />
        </span>
        <input
          type="text"
          className="bg-transparent border-none  focus:outline-none text-white placeholder:text-zinc-400 placeholder:text-sm pl-2 text-sm "
          placeholder="Search & add city ..."
          style={{ outline: "none", boxShadow: "none" }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {error && <span className="text-red-500 text-xs ml-14">{error}</span>}
    </div>
  );
};

export default Input;

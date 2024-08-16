import React, { useEffect } from "react";
import useSelectedCityStore from "../../store/useSelectedCityStore";
import { MdDeleteSweep } from "react-icons/md";
import useOtherCitiesStore from "../../store/useOtherCitiesStore";

const CityCard = ({ name, weather, temperature, icon, active }) => {
  let setSelectedCity = useSelectedCityStore((state) => state.setSelectedCity);
  const selectedCity = useSelectedCityStore((state) => state.selectedCity);

  const removeCity = useOtherCitiesStore((state) => state.removeCity);
  const getCity = useOtherCitiesStore((state) => state.cities);


  // Update selected city when component mounts and when cities change
  useEffect(() => {
      setSelectedCity(getCity[0]); // Set first city as default
  }, []);

  const handleDelete = () => {
    removeCity(name);

    // Update selected city after deletion
    if (selectedCity === name && getCity.length > 1) {
      setSelectedCity(getCity[0]);
    }
  };

  return (
    <>
      <div
        className={`flex cursor-pointer flex-row items-center  bg-[#1b1b1d] overflow-hidden rounded-3xl ${
          selectedCity === name ? "border border-zinc-700" : ""
        }`}
      >
        <div
          onClick={() => setSelectedCity(name)}
          className="flex flex-row w-full h-full justify-between items-center pl-6 pr-2"
        >
          <div className="flex flex-col">
            <span className="text-white font-normal font-poppins capitalize text-20px lg:text-[20px]">
              {name}
            </span>
            <span className="text-zinc-500 font-inter mt-2">{weather}</span>
          </div>
          <div className="flex flex-row h-full items-center">
            <div className="text-center py-4">
              <img
                src={`/images/icons/${icon}.png`}
                alt=""
                className="h-10 w-12"
              />
              <span className="text-white font-aldrich text-xl lg:text-2xl block mt-2 lg:mt-4">
                {temperature}°
              </span>
            </div>
          </div>
        </div>
        <div
          onClick={handleDelete}
          className="flex items-center justify-center bg-zinc-800/50 w-12 min-h-[120px] h-full cursor-pointer"
        >
          <MdDeleteSweep className="text-zinc-500 hover:text-white" size={22} />
        </div>
      </div>
    </>
  );
};

export default CityCard;

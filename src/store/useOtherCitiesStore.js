import { create } from "zustand";

const useOtherCitiesStore = create((set) => ({
  cities: ["london", "toronto", "paris", "Sydney", "Tokyo"],
  addCity: (city) =>
    set((state) => {
      const updatedCities = [city.toLowerCase(), ...state.cities.slice(0, 4)];
      return { cities: updatedCities };
    }),
  removeCity: (cityToRemove) =>
    set((state) => {
      const updatedCities = state.cities.filter(
        (city) => city.toLowerCase() !== cityToRemove.toLowerCase()
      );
      return { cities: updatedCities };
    }),
}));

export default useOtherCitiesStore;

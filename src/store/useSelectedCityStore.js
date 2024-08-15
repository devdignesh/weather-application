 
import { create } from 'zustand';

const useSelectedCityStore = create((set) => ({
  selectedCity: 'London',
  setSelectedCity: (city) => set({ selectedCity: city }),
}));

export default useSelectedCityStore;

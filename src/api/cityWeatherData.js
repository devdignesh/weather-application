export const fetchCityWeatherData = (city) => {
  console.log("API city", city);
  console.log("============================");
  
  return new Promise((resolve, reject) => {
    fetch("/weatherData.json") // Fetch the JSON file
      .then((response) => response.json())
      .then((data) => {
        const cityData = data.find((item) => item.city.toLowerCase() === city.toLowerCase());
        if (cityData) {
          resolve(cityData);
        } else {
          reject(new Error("City not found"));
        }
      })
      .catch((error) => reject(new Error("Failed to load data")));
  });
};

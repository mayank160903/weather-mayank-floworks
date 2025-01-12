import weatherData from "../actions/weatherData";
import React, { useState } from "react";

import Results from "./Results";
import Navbar from "./Navbar";
import Image from "next/image";
import spinner from "../../public/loading.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation, faSun } from "@fortawesome/free-solid-svg-icons";

const WeatherData: React.FC = () => {
  // State variables to handle the input data, errors and loading states.
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // Function to fetch weather data based on city or latit/longit
  async function handleData() {
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const response = await weatherData(city, latitude, longitude);
      if (response.error) {
        setError(response.message);
        setLoading(false);
        return;
      } else {
        setWeather(response.data);
        setLoading(false);
      }
    } catch (err) {
      setError((err as Error).message);
    }
  }

  // Function to get the device's current location
  function locateDevice() {
    setCity("");
    alert("The app will use your current location data");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLongitude(position.coords.longitude.toString());
          setLatitude(position.coords.latitude.toString());
        },
        (error) => {
          console.error("Error getting location, please try again : ", error);
        }
      );
    } else {
      console.error(
        "Please enable GeoLocation in your browser, or use a different browser."
      );
    }
  }

  // Handlers to update state when city's input is altered
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    setLatitude("");
    setLongitude("");
  };

  // Handlers to update state when latitude's or longitude's input is altered
  const handleLatituteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLatitude(e.target.value);
    setCity("");
  };

  const handleLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLongitude(e.target.value);
    setCity("");
  };

  if (error) {
    alert("Error: " + error);
    setError("");
  }

  return (
    <div>
      {/* Dummy Header */}
      <Navbar />

      <div className="top-0 bg-cyan-600/75 rounded-lg shadow-lg p-6 w-full">
        <div className="mb-4">

          <label className="block text-gray-700 font-medium mb-2">
            Enter City Name
            {/* input for city name, along with handling the onChange event */}
          </label>
          <input
            type="text"
            placeholder="Eg. Miami, Bangalore, London, etc."
            value={city} 
            onChange={handleCityChange} 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-center py-2 text-2xl">OR</div>
        <div className="text-xs font-semibold text-red-800">Hint: Use the help of Google Maps to know the exact values of your location&apos;s latitude and longitude</div>
        <div className="grid grid-cols-2 gap-4 mb-4">

          {/* inputs for latitude's and longitude's values, along with handling the onChange events */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Enter Latitude
            </label>
            <input
              type="text"
              placeholder="eg. 25.876543"
              value={latitude} 
              onChange={handleLatituteChange} 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Enter Longitude
            </label>
            <input
              type="text"
              placeholder="eg. 54.876543"
              value={longitude} 
              onChange={handleLongitudeChange} 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 mx-auto justify-evenly">
          {/* button to execute function to fetch data based on the inputs */}
          <button
            onClick={handleData}
            className="px-6 flex items-center gap-2 rounded-md py-2 bg-cyan-500 text-white hover:bg-black transition"
          >
            <FontAwesomeIcon icon={faSun} />
            <span>Get Weather</span>
          </button>
          {/* Enable the app to add your location's coordinates using GeoLocation */}
          <button
            onClick={locateDevice} 
            className="px-6 flex items-center gap-2  rounded-md py-2 bg-yellow-300 hover:bg-black hover:text-white transition"
          >
            <FontAwesomeIcon icon={faMapLocation} />
            <span>Use Your current coordinates</span>
          </button>
        </div>
      </div>

      {/* Loading state before the data is fetched */}
      {loading && (
        <div className="flex text-xl justify-center text-center">
          Loading data...
          <Image src={spinner} alt="/" width={24} height={24} />
        </div>
      )}

      {/* // Display the weather data using inputs */}
      {!loading && weather && (
        <div className="mt-3">
          <Results weather={weather} />
        </div>
      )}
    </div>
  );
};

export default WeatherData;

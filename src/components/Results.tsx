// used FontAwesomeIcons
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureEmpty } from "@fortawesome/free-solid-svg-icons/faTemperatureEmpty";
import { faTemperatureFull } from "@fortawesome/free-solid-svg-icons/faTemperatureFull";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

// Define the props interface for the WeatherCard component
interface WeatherProps {
  weather: {
    city: string;
    description: string;
    humidity: string;
    temperature: string;
    maxTemperature: string;
    minTemperature: string;
    windSpeed: string;
    icon: string;
    feelsLike: string;
    visibility: string;
  };
}

// WeatherCard component to display weather information
const Results: React.FC<WeatherProps> = ({ weather }) => {
  return (
    <div className="mt-2 p-3 bg-gradient-to-r from-cyan-700/80 to-blue-400/80 rounded-md shadow-md text-white">
      {/* date and time of the data */}
      <div className="flex items-center justify-between">
        <p className="px-5 my-2 text-gray-300 text-sm">
          Data for Date and Time: {new Date().toLocaleString()} IST
        </p>
        {/* City Name Here */}
        <h2 className="text-xl">{weather.city}&apos;s weather</h2>{" "}
      </div>

      <hr />


      <div className="text-center mb-2 mx-5 flex items-center justify-around gap-5">
        <div className="flex items-center justify-between gap-12">
          {/* Div element to display current temperature and feels-like temperature, rounding of the values to the closest integer */}
          <div className="">
            <div className="text-xl">
              Current Temp : {Math.round(Number(weather.temperature))}&deg;C
            </div>
            <div className="mt-1 text-sm">
              Feels Like : {Math.round(Number(weather.feelsLike))}&deg;C
            </div>
          </div>
          <div>
            {/* Icon of weather fetched from the response data */}
            <Image
              className="-mt-1"
              src={weather.icon}
              alt=""
              width={100}
              height={100}
            />
            {/* Description of weather fetched from the backend, eg. : sunny, cloudy, etc. */}
            <div className="text-sm -mt-2">{weather.description}</div>
          </div>
          {/* Visibility (in kms) */}
          <div className="">Visibility : Upto {weather.visibility} kms</div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col mt-3 justify-around gap-4 pb-2">
        <div className="flex justify-around">
          <div className="flex items-center space-x-2">
            {/* Displaying Max Temperature */}
            <FontAwesomeIcon className="text-xl" icon={faTemperatureFull} />
            <p>
              <span className="">Highest Temp: </span>
              {Math.round(Number(weather.maxTemperature))}&deg;C
            </p>
          </div>
          {/* Displaying Humidity */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faDroplet} />
            <p>
              <span className="">Humidity:</span> {weather.humidity}&#37;
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-around">
          <div className="flex items-center space-x-2">
            {/* Displaying Minimum temperature */}
            <FontAwesomeIcon className="text-xl" icon={faTemperatureEmpty} />{" "}
            <p>
              <span className="">Lowest Temp: </span>
              {Math.round(Number(weather.minTemperature))}&deg;C{" "}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {/* Displaying wind speed */}
            <FontAwesomeIcon icon={faWind} />
            <p>
              <span className="">Wind: </span> {weather.windSpeed} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

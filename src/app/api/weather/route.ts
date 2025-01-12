import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = req?.url;

  // Extract query parameters from the request URL
  const params = new URLSearchParams(new URL(url).search);
  const city = params.get("city");
  const lat = params.get("lat");
  const long = params.get("lon");

  // Validate input: ensure either city or both lati and longi are provided

  if ((!city || city === "") && ((!lat || lat === "") || (!long || long === ""))) {
    return NextResponse.json({
      error: true,
      message: "Invalid Input: Please enter a valid city name or provide both the latitude and longitude of the location.",
    });
  }

  try {
    // Fetch weather data from the OpenWeatherMap API
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=${lat}&lon=${long}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
        );

    // Handling error prone response
    if (!response.ok) {
      return NextResponse.json({
        error: true,
        message: `Weather : ${response.statusText} - Please enter a valid city or provide both latitude and longitude`,
      });
    }

    // Parse the response data as JSON
    const data = await response.json();
    const weatherData = {
      city: data.name,
      description: data.weather[0]?.description,
      humidity: data.main.humidity,
      temperature: data.main.temp,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      windSpeed: data.wind.speed,
      maxTemperature: data.main.temp_max,
      minTemperature: data.main.temp_min,
      feelsLike : data.main.feels_like,
      visibility: data.visibility/1000,
    };

    // Return the weather data as a JSON response
    return NextResponse.json({
      error: false,
      message: "success!!",
      data: weatherData,
    });

  } catch (error) {
    // Handle any errors that occur during the fetch operation
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error, status 500";
    return NextResponse.json({
      error: true,
      message: errorMessage,
      status: 500
    });
  }
}
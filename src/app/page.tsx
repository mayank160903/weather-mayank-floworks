"use client"

import WeatherData from "@/components/WeatherData";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Component to input city/lat&long and get results */}
      <WeatherData />
    </div>
  );
}

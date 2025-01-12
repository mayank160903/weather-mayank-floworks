import React, { useState } from 'react'
import Navbar from './Navbar'

const WeatherData: React.FC = () => {

    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [Weather, setWeather] = useState(null);

    async function handleData(){
        setLoading(true);
        setError("");
        setWeather(null);
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`);
            const data = response.json();
            if (!response.ok) {
                setError("Error fetching data");
                setLoading(false);
                return;
              } else {
                setWeather(data);
                setLoading(false);
              }
        }
    }

  return (
    <div>
      <Navbar />
      <form action="" onSubmit={handleData}>
      <label htmlFor="">City Name</label>
      <input type="text" placeholder='Eg. Miami, Bangalore, London, etc.' />
      <button type='submit'>Get Weather</button>
      </form>

    </div>
  )
}

export default WeatherData

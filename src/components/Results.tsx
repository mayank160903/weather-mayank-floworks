import React from 'react'

type WeatherProps = {
    weather: {
        city: string;
        description: string;
        humidity: string;
        temperature: string;
    }
}

const Results: React.FC<WeatherProps> = ({weather}) => {
  return (
    <div>
      Results here
    </div>
  )
}

export default Results

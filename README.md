# Mayank's Assignment Submission - Floworks

> - View the assignment Hosted on Vercel : [visit Vercel Link](https://weather-mayank-floworks.vercel.app/)

## Installation and Run Application
To access the application locally, follow the steps given below.

- **Insatalltion**:
  - Clone/zip the repository
  - Create a .env file
  - Add your openWeatherMaps API Key from the [open weather maps API website](https://openweathermap.org/current)
  - Add the following API_KEY ```NEXT_PUBLIC_API_KEY=your_api_key ```
  - Open `weather-mayank-floworks` directory in terminal and run following command.
> - `cd weather-mayank-floworks`
  - Run the Following commands in terminal to install packages
> - ` npm i `


## Getting Started
  - For running the application:
> - run  ```npm run dev``` on the terminal
>  - Open [http://localhost:3000](http://localhost:3000) on your browser to view the application


  - For Frontend Unit Testing, run the ``` npm run test``` command



### About Project

- **Introduction**: A weather application, allowing users to retrieve current weather information for any city using city name or the coordinates of the location as inputs.
- **Technologies used**: Next.js, Typescript, GitHub, Node, Express, TailwindCSS, jest, supertest, Vercel, openWeatherMap API .
- **Functionalities**:  
  - Takes the user's location (or user input) to retrieve current coordinates, and retrieve weather data with coordinates as inputs.
  - Takes the user input for city name if the user is not passing the coordinates input, retrieves weather data with city name as input.
  - Weather Data contains : Current Temperature, Feels Like Temperature, Humidity, Wind Speed, Visibility, description, date and time, city name, and weather icon .
  - Other features : Loading state, gradient colors, code reusability, comments for code description, unit testing and deployed link.
 
- **Error Handling**:  
  - Provides readable error messages for invalid inputs or errors in retrieving data using try/catch blocks and alert messages.
  - Backend error handling and error state management on frontend
- **Testing**: 
    - Implemented Unit testing using jest on the frontend WeatherData component and the weatherData.ts action used to fetch data.
    - Attempted unit testing on the route.ts file using supertest for backend testing, faced some issues on testing backend.


## For any doubts, kindly contact me on gmayank909@gmail.com
## Thank You
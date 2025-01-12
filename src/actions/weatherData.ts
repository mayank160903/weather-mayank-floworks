// import { NextResponse } from "next/server";

const weatherData = async (
    city: string,
    latitude: string,
    longitude: string
  ) => {

    try {
        // Getting response using city, latitute and longitude taken from frontend
      const response = await fetch(`/api/weather?city=${city}&lat=${latitude}&lon=${longitude}`);
      
      if (!response.ok) {
        throw new Error("City not found");
      }
      
      return response.json();
    } catch (err) {
      return Promise.reject(err);
    //   return NextResponse.json({
    //     error: true,
    //   message: err,
    //   status: 500
    //  } );
    }
  };
  
  export default weatherData;
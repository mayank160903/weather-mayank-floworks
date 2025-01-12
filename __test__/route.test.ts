import request from "supertest";
import { createServer } from "http";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import handler from "../src/app/api/weather/route";  // Adjust the path if necessary

// Function to create a server using Next.js API handler
function toServer(nextHandler: NextApiHandler) {
  return createServer(async (req, res) => {
    await nextHandler(req as NextApiRequest, res as NextApiResponse);
  });
}

describe("GET /api/weather", () => {
  // Convert handler into a server
  const server = toServer(handler as unknown as (req: NextApiRequest, res: NextApiResponse) => Promise<void>);

  it("returns error when no query parameters are provided", async () => {
    const response = await request(server).get("/api/weather");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      error: true,
      message:
        "Invalid Input: Please enter a valid city name or provide both the latitude and longitude of the location.",
    });
  });

  it("returns weather data when a valid city is provided", async () => {
    const response = await request(server).get(
      "/api/weather?city=London"
    );
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toBe("success!!");
    expect(response.body.data).toMatchObject({
      city: "London",
      description: expect.any(String),
      humidity: expect.any(Number),
      temperature: expect.any(Number),
      icon: expect.any(String),
      windSpeed: expect.any(Number),
      maxTemperature: expect.any(Number),
      minTemperature: expect.any(Number),
      feelsLike: expect.any(Number),
      visibility: expect.any(Number),
    });
  });

  it("returns error for invalid city", async () => {
    const response = await request(server).get(
      "/api/weather?city=InvalidCity"
    );
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      error: true,
      message: expect.stringContaining("Please enter a valid city"),
    });
  });

  it("returns weather data when valid latitude and longitude are provided", async () => {
    const response = await request(server).get(
      "/api/weather?lat=51.5074&lon=-0.1278"
    );
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toBe("success!!");
    expect(response.body.data).toMatchObject({
      city: expect.any(String),
      description: expect.any(String),
      humidity: expect.any(Number),
      temperature: expect.any(Number),
      icon: expect.any(String),
      windSpeed: expect.any(Number),
      maxTemperature: expect.any(Number),
      minTemperature: expect.any(Number),
      feelsLike: expect.any(Number),
      visibility: expect.any(Number),
    });
  });

  it("returns error for invalid latitude and longitude", async () => {
    const response = await request(server).get(
      "/api/weather?lat=invalid&lon=invalid"
    );
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      error: true,
      message: expect.stringContaining("Please enter a valid city"),
    });
  });
});




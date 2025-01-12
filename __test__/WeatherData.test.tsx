import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import WeatherData from "../src/components/WeatherData";

// Mock the weather data action
jest.mock("../actions/weatherData", () => jest.fn());

describe("WeatherData component", () => {
  it("renders input fields and buttons", () => {
    render(<WeatherData />);
    expect(
      screen.getByPlaceholderText("Eg. Miami, Bangalore, London, etc.")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("eg. 25.876543")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("eg. 54.876543")).toBeInTheDocument();
    expect(screen.getByText("Get Weather")).toBeInTheDocument();
    expect(
      screen.getByText("Use Your Current coordinates")
    ).toBeInTheDocument();
  });

  it("displays loading text when fetching data", async () => {
    render(<WeatherData />);
    fireEvent.click(screen.getByText("Get Weather"));
    expect(screen.getByText("Loading data...")).toBeInTheDocument();
  });

  it("handles errors gracefully", async () => {
    // Mock the fetch call to simulate an error
    jest.spyOn(global, "fetch").mockRejectedValueOnce(new Error("API error"));

    render(<WeatherData />);

    fireEvent.click(screen.getByText("Get Weather"));

    // Wait for the error message to be displayed
    await waitFor(() =>
      expect(screen.getByText(/Error: API error/i)).toBeInTheDocument()
    );
  });
});

import weatherData from "../src/actions/weatherData";

describe("weatherData function", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return data when the API call is successful", async () => {
    const mockResponse = { data: "mock weather data" };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await weatherData("London", "51.5074", "-0.1278");
    expect(result).toEqual(mockResponse);
  });

  it("should throw an error when the API call fails", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(weatherData("InvalidCity", "", "")).rejects.toThrow("City not found");
  });
});

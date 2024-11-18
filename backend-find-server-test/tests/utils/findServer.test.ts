import { findServer } from "../../src/utils";
import axios from "axios";

// Mock axios
jest.mock("axios");

describe("findServer", () => {
  const TIMEOUT = 5000;
  const SERVERS = [
    { url: "https://does-not-work.perfume.new", priority: 1 },
    { url: "https://gitlab.com", priority: 4 },
    { url: "http://app.scnt.me", priority: 3 },
    { url: "https://offline.scentronix.com", priority: 2 },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the online server with the lowest priority", async () => {
    // Mock the axios request for specific URLs
    (axios.get as jest.Mock).mockImplementation((url: string) => {
      if (url === "https://gitlab.com" || url === "http://app.scnt.me") {
        return Promise.resolve({ status: 200 });
      }
      return Promise.reject(new Error("Offline"));
    });

    const result = await findServer(SERVERS, TIMEOUT);

    // Ensure the server with the lowest priority is returned
    expect(result.url).toBe("http://app.scnt.me");
  });

  it("should throw an error if no servers are online", async () => {
    // Mock rejected axios calls for all servers
    (axios.get as jest.Mock).mockRejectedValue(new Error("Offline"));

    await expect(findServer(SERVERS, TIMEOUT)).rejects.toThrow(
      "No servers are online"
    );
  });
});

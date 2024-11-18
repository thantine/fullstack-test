import axios from "axios";
import { Server } from "../typing";

async function checkServer(
  server: Server,
  timeout: number
): Promise<{ server: Server; isOnline: boolean }> {
  try {
    const response = await axios.get(server.url, { timeout });
    const isOnline = response.status >= 200 && response.status < 300;
    return { server, isOnline };
  } catch {
    return { server, isOnline: false };
  }
}

export async function findServer(
  servers: Server[],
  timeout: number
): Promise<Server> {
  const serverChecks = servers.map((server) => checkServer(server, timeout));
  const results = await Promise.all(serverChecks);

  const onlineServers = results
    .filter((result) => result.isOnline)
    .map((result) => result.server);

  if (!onlineServers.length) {
    throw new Error("No servers are online");
  }

  return onlineServers.reduce((lowestPriorityServer, currentServer) =>
    currentServer.priority < lowestPriorityServer.priority
      ? currentServer
      : lowestPriorityServer
  );
}
